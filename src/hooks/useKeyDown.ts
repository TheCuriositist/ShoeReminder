import { useEffect } from 'react';

type KeyOptions = {
    meta?: boolean;
    ctrl?: boolean;
    alt?: boolean;
    shift?: boolean;
    preventDefault?: boolean;
    metaOrCtrl?: boolean;
};

export function useKeyDown(targetKey: string, callback: () => void, options: KeyOptions = {}) {
    useEffect(() => {
        const handler = (event: KeyboardEvent) => {
            if (event.key.toLowerCase() !== targetKey.toLowerCase()) return;

            const isMeta = event.metaKey;
            const isCtrl = event.ctrlKey;

            if (options.metaOrCtrl) {
                if (!(isMeta || isCtrl)) return;
            } else {
                if (options.meta && !isMeta) return;
                if (options.ctrl && !isCtrl) return;
            }

            if (options.preventDefault !== false) {
                event.preventDefault();
            }
            callback();
        };

        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [targetKey, callback, options.meta, options.ctrl, options.metaOrCtrl, options.preventDefault]);
}
