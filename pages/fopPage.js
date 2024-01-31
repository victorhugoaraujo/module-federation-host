import dynamic from 'next/dynamic';
 
const Page = dynamic(() => import('fop/pages/index'), { ssr: false});
 
export default Page;