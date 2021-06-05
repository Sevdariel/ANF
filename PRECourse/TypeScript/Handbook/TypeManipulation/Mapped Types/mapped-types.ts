type OnlyBoolsAndHorses = {
    [key: string]: boolean | HTMLOrSVGElement;
};

const conforms: OnlyBoolsAndHorses = {
    del: true,
    rodney: false
};

type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
};

type FeatureFlags = {
    darkMode: () => void;
    newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;