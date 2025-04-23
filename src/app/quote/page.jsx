import GetAQuoteForm from '@/components/GetQuoteForm/GetQuoteForm'
import React from 'react'
import { Toaster } from 'sonner';

// export const metadata = { /* ... */ };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <Toaster richColors position="top-right" />
//         {children}
//       </body>
//     </html>
//   );
// }

export default function Quote() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black py-12 px-4">
      <GetAQuoteForm />
    </div>
  )
}
