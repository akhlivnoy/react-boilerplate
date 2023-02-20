import { useParams } from 'react-router-dom';

import { RouterParams } from '#navigation';

export const useAppParams = () => useParams<RouterParams>();
