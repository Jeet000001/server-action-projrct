import Contact_List from '@/components/Contact_List'
import Link from 'next/link'


const page = () => {
    return (
        <div>
            <div>
                <Link href={"/"} className='border border-gray-600 px-2 py-1 rounded-md'>Back to Form</Link>
            </div>
            <Contact_List />
        </div>
    )
}

export default page