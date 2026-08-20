import Link from 'next/link';

export default function SuccessPage({ searchParams }) {
    const paymentId = searchParams?.payment_id;
    const orderId = searchParams?.order_id;

    return (
        <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
            <div className="max-w-2xl w-full bg-gray-800 rounded-2xl shadow-xl overflow-hidden text-center">
                <div className="bg-green-500 p-6 flex justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                
                <div className="p-8">
                    <h1 className="text-3xl font-bold mb-4 text-white">Welcome to DOS Fellowship!</h1>
                    <p className="text-gray-300 text-lg mb-8">
                        Your payment was processed successfully. We've sent a confirmation email to you.
                    </p>
                    
                    {paymentId && (
                        <div className="bg-gray-700/50 rounded-lg p-4 mb-8 text-left max-w-sm mx-auto">
                            <div className="text-sm text-gray-400 mb-1">Transaction Reference</div>
                            <div className="font-mono text-gray-200">{paymentId}</div>
                        </div>
                    )}
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                            Return Home
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
