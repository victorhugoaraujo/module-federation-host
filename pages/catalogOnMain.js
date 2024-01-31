import dynamic from 'next/dynamic';
 
const Page = dynamic(() => import('fop/pages/catalog'), { ssr: false});
 
export default Page;