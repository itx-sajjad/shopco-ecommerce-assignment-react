import { Link } from 'react-router-dom'
import Newsletter from './Newsletter'

export default function Footer() {
  return (
    <footer className="bg-mist mt-24">
      <div className="container-px pt-10">
        <div className="bg-ink text-paper rounded-3xl px-6 py-8 md:px-14 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 -mb-16 md:-mb-20 relative z-10">
          <h3 className="font-display font-extrabold text-2xl md:text-3xl text-center md:text-left leading-tight">
            STAY UP TO DATE ABOUT<br />OUR LATEST OFFERS
          </h3>
          <Newsletter dark />
        </div>
      </div>

      <div className="container-px pt-24 md:pt-28 pb-8">
        <div className="grid gap-10 md:grid-cols-5 border-t border-black/10 pt-10">
          <div className="md:col-span-2">
            <p className="font-display font-extrabold text-2xl mb-4">SHOP.CO</p>
            <p className="text-sm text-gray max-w-xs leading-relaxed">
              We have clothes that suit your style and which you're proud to wear.
              From women to men.
            </p>
          </div>
          <FooterCol title="Company" items={['About', 'Features', 'Works', 'Career']} />
          <FooterCol title="Help" items={['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy']} />
          <FooterCol title="Resources">
            <li><Link to="/shop" className="hover:text-ink">All products</Link></li>
            <li><Link to="/cart" className="hover:text-ink">Your cart</Link></li>
          </FooterCol>
        </div>
        <div className="pt-8 mt-8 border-t border-black/10 text-xs text-gray flex flex-col sm:flex-row gap-2 justify-between">
          <p>&copy; {new Date().getFullYear()} SHOP.CO. All rights reserved.</p>
          <p>Design based on the SHOP.CO Figma community template.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, items, children }) {
  return (
    <div>
      <p className="font-medium mb-4 text-sm">{title}</p>
      <ul className="space-y-2 text-sm text-gray">
        {items ? items.map((i) => <li key={i}><a href="#" className="hover:text-ink">{i}</a></li>) : children}
      </ul>
    </div>
  )
}
