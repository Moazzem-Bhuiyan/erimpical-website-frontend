'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useDeleteOrderMutation, useGetOrdersQuery } from '@/redux/api/orderAndpaymentApi';
import Loader from '@/app/loading';
import { Trash } from 'lucide-react';
import { toast } from 'sonner';

export function OrderHistory() {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'processing':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  // Fetching order history from API
  const { data, isLoading, error } = useGetOrdersQuery();
  // delete order api
  const [deleteOrder, { isLoading: isDeleteLoading }] = useDeleteOrderMutation();

  if (isLoading)
    return (
      <p>
        <Loader />
      </p>
    );
  if (error) return <p>Error: {error.error}</p>;

  // original API response: data.data
  const orders = data?.data || [];

  // delete order handeler

  const handleDeleteOrder = async (orderId) => {
    const toastId = toast.loading('Deleting order...');
    try {
      const res = await deleteOrder(orderId).unwrap();
      if (res?.success) {
        toast.success('Order deleted successfully', { id: toastId });
      }
    } catch (error) {
      toast.error(error?.data?.message, { id: toastId });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground !mb-6">Order History</h2>

      <div className="!space-y-4">
        {orders.length > 0 ? (
          orders.map((order) => (
            <Card key={order._id} className="hover:shadow-md transition-shadow">
              <CardContent className="!p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* LEFT */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 !mb-2">
                      <p className="font-bold text-foreground">{order.id}</p>

                      <Badge className={`${getStatusColor(order.status)} border-0 !p-2`}>
                        {order.status}
                      </Badge>

                      <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border-0 !p-2">
                        {order.paymentStatus}
                      </Badge>
                    </div>

                    {/* Items Titles */}
                    <p className="text-muted-foreground text-sm !mb-1">
                      {order.items.map((item) => item.product.title).join(', ')}
                    </p>

                    {/* Date */}
                    <p className="text-muted-foreground text-xs">
                      {new Date(order.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>

                  {/* RIGHT */}
                  <div className="text-right">
                    <p className="text-lg font-bold text-foreground">${order.amount}</p>
                  </div>
                  <div onClick={() => handleDeleteOrder(order._id)}>
                    <Trash color="red" size={20} className="cursor-pointer" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="!p-12 text-center">
              <p className="text-muted-foreground">No orders yet.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
