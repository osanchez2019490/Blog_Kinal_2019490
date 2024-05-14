import { useState, useCallback} from "react";
import toast from "react-hot-toast";
import { publicationGet as getPublicationsRequest } from "../../service/api";

export const usePublications = () => {
    const [publications, setPublications] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    const getPublications = useCallback(async () => {
        setIsFetching(true);
        try {
            const publicationData = await getPublicationsRequest({
                headers: {
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache'
                }
            });

            if (publicationData.error) {
                toast.error(
                    publicationData.e?.response?.data || 'Error occurred when reading channels'
                );
            } else {
                setPublications(publicationData.data.publications);
            }
        } catch (error) {
            toast.error('Error occurred when fetching publications');
        } finally {
            setIsFetching(false);
        }
    }, []);

    return {
        getPublications,
        publications,
        isFetching,
        allPublications: publications,
    };
};