declare module "cordova-plugin-health" {
    class Health {
        constructor();

        isAvailable(success: () => void, error: (err: any) => void): void;
        openHealthSettings(success: () => void, error: (err: any) => void): void;
        requestAuthorization(dts: HealthDataTypeOptions, onSuccess: () => void, onError: (err: any) => void): void;
        isAuthorized(
            dts: HealthDataTypeOptions,
            onSuccess: (authorized: boolean) => void,
            onError: (err: any) => void
        ): void;
        query(
            opts: HealthQueryOptions,
            onSuccess: (data: HealthQueryResult[]) => void,
            onError: (err: any) => void
        ): void;
        queryAggregated(
            opts: HealthQueryOptions,
            onSuccess: (data: HealthQueryResult[]) => void,
            onError: (err: any) => void
        ): void;
        store(data: HealthStoreData, onSuccess: () => void, onError: (err: any) => void): void;
        delete(data: HealthDeleteData, onSuccess: () => void, onError: (err: any) => void): void;
    }

    interface HealthDataTypeOptions {
        read?: string[];
        write?: string[];
    }

    interface HealthQueryOptions {
        startDate: Date;
        endDate: Date;
        dataType: string;
        filterOutUserInput?: boolean;
        includeCalories?: boolean;
        includeDistance?: boolean;
        bucket?: string;
        /* Android only - Filter data for only apps with the specified bundle ids */
        bundleIds?: string[];
    }

    interface HealthQueryResult {
        id: string;
        startDate: Date;
        endDate: Date;
        value: string | number;
        unit?: string;
        sourceName?: string;
        sourceDevice?: string;
        sourceBundleId?: string;
        entryMethod: "actively_recorded" | "automatically_recorded" | "manual_entry";
    }

    interface HealthStoreData {
        dataType: string;
        startDate: Date;
        endDate: Date;
        value: any;
        calories?: number;
        distance?: number;
        activityType?: string;
        metadata?: any;
    }

    interface HealthDeleteData {
        dataType: string;
        startDate: Date;
        endDate: Date;
    }
}

declare global {
    interface CordovaPlugins {
        health: Health;
    }

    interface Cordova {
        plugins: CordovaPlugins;
    }

    interface Window {
        cordova: Cordova;
    }
}

export { };

