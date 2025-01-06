import { redirect } from "next/navigation"

export default async function Page({params} : {params: {id: string}}) {
    const {id} = await params;

    const checkAdmin = () => {
        if(id != "admin") redirect('/');
    }

    checkAdmin();

    
    return <p>Hello, this page is for admin</p>;
}