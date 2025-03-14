import Hero from "../../components/Service/Hero";
import Layanan from "../../components/Service/Layanan";
import useCategories from "../../hooks/useCategory";

function Service() {
    const { categories, error, loading } = useCategories();

    if (loading) {
        return <p className="text-center text-gray-600">Loading...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">Error: {error}</p>;
    }

    if (!categories || categories.length === 0) {
        return (
            <p className="text-center text-gray-500">Tidak ada layanan tersedia.</p>
        );
    }

    return (
        <>
            <Hero />
            <Layanan categories={categories} />
        </>
    );
}

export default Service;