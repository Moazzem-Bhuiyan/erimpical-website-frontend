import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function OrderHistory() {
  // Mock order data - replace with real data from your backend
  const orders = [
    {
      id: 'ORD-001',
      date: '2024-12-15',
      total: '$249.99',
      status: 'Delivered',
      items: 'Premium Wireless Headphones',
    },
    {
      id: 'ORD-002',
      date: '2024-11-28',
      total: '$89.50',
      status: 'Delivered',
      items: 'USB-C Cable Set',
    },
    {
      id: 'ORD-003',
      date: '2024-11-10',
      total: '$349.00',
      status: 'Processing',
      items: 'Smart Watch Pro',
    },
    {
      id: 'ORD-004',
      date: '2024-10-22',
      total: '$159.99',
      status: 'Delivered',
      items: '4K Webcam',
    },
    {
      id: 'ORD-005',
      date: '2024-09-18',
      total: '$79.99',
      status: 'Delivered',
      items: 'Mechanical Keyboard',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Processing':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground !mb-6">Order History</h2>

      <div className="!space-y-4">
        {orders.length > 0 ? (
          orders.map((order) => (
            <Card key={order.id} className="hover:shadow-md transition-shadow">
              <CardContent className="!p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 !mb-2">
                      <p className="font-bold text-foreground">{order.id}</p>
                      <Badge className={`${getStatusColor(order.status)} border-0 !p-2 `}>
                        {order.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm !mb-1">{order.items}</p>
                    <p className="text-muted-foreground text-xs">
                      {new Date(order.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-bold text-foreground">{order.total}</p>
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
