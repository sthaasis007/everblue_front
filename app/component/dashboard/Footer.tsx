export default function Footer() {
  return (
    <footer className="mt-10 border-t bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-4">
        <div>
          <h3 className="font-semibold">EverBlue</h3>
          <p className="mt-2 text-sm text-slate-600">
            Dummy footer content. Replace with your real info.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">For buyers</h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            <li>Delivery</li>
            <li>Exchange</li>
            <li>Payments</li>
            <li>Promo codes</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">About company</h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            <li>Owner</li>
            <li>Stock</li>
            <li>Customers</li>
            <li>Gifts</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            <li>9842748191</li>
            <li>shop@everblue.com</li>
            <li>@everblue (Instagram)</li>
          </ul>
        </div>
      </div>

      <div className="border-t py-4 text-center text-xs text-slate-500">
        © 2020 – 2025 EverBlue. All rights reserved.
      </div>
    </footer>
  );
}
