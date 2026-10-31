import { CRTTopic } from '../../types/crtTypes';
import { CRT_YEAR_2_DATA } from '../crtYear2Data';
import { applyOverrides } from './apply';

// One chunk per year: the generated year data plus that year's rewritten chapters.
const overrides = import.meta.glob<CRTTopic>('../chapters/y2-*.json', { eager: true, import: 'default' });

export default applyOverrides(CRT_YEAR_2_DATA, overrides);
