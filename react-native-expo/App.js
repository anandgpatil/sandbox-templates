import { Card, CardContent } from "@/components/ui/card";
<Button variant="ghost" className="flex items-center space-x-1 text-white">
<LogOut className="w-5 h-5" /> <span>Logout</span>
</Button>
</header>


{/* Main Content */}
<main className="px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
{/* Left Section */}
<div className="col-span-2 space-y-6">
<h1 className="text-2xl font-semibold">Welcome back, John!</h1>


{/* Search Bar */}
<div className="bg-white p-4 rounded-2xl shadow-sm">
<Input placeholder="Search for products, orders, or help..." className="w-full" />
</div>


{/* Dashboard Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<Card className="rounded-2xl shadow-md">
<CardContent className="p-4">
<p className="text-gray-500">Orders</p>
<h2 className="text-xl font-bold">23</h2>
</CardContent>
</Card>


<Card className="rounded-2xl shadow-md">
<CardContent className="p-4">
<p className="text-gray-500">Pending Payments</p>
<h2 className="text-xl font-bold">5</h2>
</CardContent>
</Card>


<Card className="rounded-2xl shadow-md">
<CardContent className="p-4">
<p className="text-gray-500">Support Tickets</p>
<h2 className="text-xl font-bold">2</h2>
</CardContent>
</Card>
</div>
</div>


{/* Right Sidebar */}
<aside className="space-y-6">
{/* Profile Card */}
<Card className="rounded-2xl shadow-md">
<CardContent className="p-6 flex items-center space-x-4">
<Avatar className="w-12 h-12 bg-blue-500 text-white">J</Avatar>
<div>
<h2 className="font-semibold">John Doe</h2>
<p className="text-sm text-gray-500">Premium Member</p>
</div>
</CardContent>
</Card>


{/* Notifications */}
<Card className="rounded-2xl shadow-md">
<CardContent className="p-6 space-y-3">
<h2 className="font-semibold text-lg">Notifications</h2>
<ul className="text-sm space-y-2">
<li className="text-gray-700">✔ Order #1234 has been shipped</li>
<li className="text-gray-700">⚠ Payment pending for Order #1250</li>
<li className="text-gray-700">ℹ New support reply available</li>
</ul>
</CardContent>
</Card>
</aside>
</main>
</div>
);
}
