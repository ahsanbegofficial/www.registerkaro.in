import { CustomDefault } from "../../components/child_components/CustomDefault";

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: "blocking"
    }
}

export const getStaticProps = async ({ params }: { params: any }) => {
    return {
        notFound: true,
    }
}

export default function Home() {
    return (
        <CustomDefault />
    )
}