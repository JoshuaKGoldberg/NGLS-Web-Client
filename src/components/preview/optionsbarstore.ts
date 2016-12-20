import { action, observable } from "mobx";

import { IStorageWrapper } from "../../storage/storagewrapper";
import { stored } from "../../storage/stored";
import { storing } from "../../storage/storing";

/**
 * Store for an options bar component.
 */
@storing<OptionsBarStore>(store => store.storageWrapper)
export class OptionsBarStore {
    /**
     * Language the GLS syntax will compile to.
     */
    @stored("CSharp")
    public language: string;

    /**
     * Sample name the user is editing from.
     */
    @stored("Default")
    public sample: string;

    /**
     * @param language   A new language GLS syntax will compile into.
     */
    @action
    public readonly setLanguage = (language: string): void => {
        this.language = language;
    };

    /**
     * @param sample   A new sample name the user is editing from.
     */
    @action
    public readonly setSample = (sample: string = this.sample): void => {
        this.sample = sample;
    };

    /**
     * Resets to the current sample.
     */
    @action
    public readonly reset = (): void => {
        this.sample = this.sample;
    }

    /**
     * Wrapper for persistent items kept in a Storage object.
     */
    private readonly storageWrapper: IStorageWrapper;

    /**
     * Initializes a new instance of the OptionsBarStore class.
     * 
     * @param storageWrapper   Wrapper for persistent items kept in a Storage object.
     */
    public constructor(storageWrapper: IStorageWrapper) {
        this.storageWrapper = storageWrapper;
    }
}
