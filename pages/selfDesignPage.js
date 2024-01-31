import dynamic from 'next/dynamic';
 
const Page = dynamic(() => import('selfdesign/pages/index'), { ssr: false});
 
export default Page;