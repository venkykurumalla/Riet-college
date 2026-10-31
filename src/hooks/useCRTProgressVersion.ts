import { useEffect, useState } from 'react';
import { crtProgressService } from '../services/crtProgressService';

// Re-renders when CRT progress changes and returns a number to key useMemo on.
export function useCRTProgressVersion(): number {
  const [version, setVersion] = useState(crtProgressService.version);
  useEffect(() => crtProgressService.subscribe(() => setVersion(crtProgressService.version)), []);
  return version;
}
