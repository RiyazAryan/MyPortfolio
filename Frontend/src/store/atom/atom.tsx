import { atom } from 'recoil'
import { CombinedData } from '../../types';

export const alldetails=atom<CombinedData>({

    key:'alldetails',
    default:[[], [], [], [], [], []],
    effects_UNSTABLE: [
        ({ onSet }) => {
            onSet((newValue) => {
                localStorage.setItem("details", JSON.stringify(newValue));
            });
        }
    ]
})