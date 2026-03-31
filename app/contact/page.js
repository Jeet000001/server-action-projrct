import Contact_List from '@/components/Contact_List'
import Link from 'next/link'

const page = () => {
    return (
        <div className="min-h-screen bg-[#0f0f0f]">

            {/* Top Nav Bar */}
            <div className="border-b border-[#2a2a2a] px-8 py-4">
                <div className="max-w-3xl mx-auto">
                    <Link
                        href={"/"}
                        className="inline-flex items-center gap-2 text-[#6b6560] hover:text-[#c8a96e] text-xs uppercase tracking-widest font-medium transition-colors duration-200 group"
                    >
                        <span className="text-[#c8a96e] group-hover:-translate-x-1 transition-transform duration-200">←</span>
                        Back to Form
                    </Link>
                </div>
            </div>

            {/* Contact List */}
            <Contact_List />

        </div>
    )
}

export default page