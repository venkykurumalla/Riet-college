import { CRTTopic } from '../../types/crtTypes';
import { CRT_YEAR_1_DATA } from '../crtYear1Data';
import { applyOverrides } from './apply';

// One chunk per year: the generated year data plus that year's rewritten chapters.
const overrides = import.meta.glob<CRTTopic>('../chapters/y1-*.json', { eager: true, import: 'default' });

export default applyOverrides(CRT_YEAR_1_DATA, overrides);
