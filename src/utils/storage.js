import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEYS = {
  FAVORITES: "favorites",
  HISTORY: "history",
  SETTINGS: "settings",
  RECENT_SEARCHES: "recent_searches",
  VIEWED_GUIDES: "viewed_guides",
  OFFLINE_DATA: "offline_data",
  DISCLAIMER_ACCEPTED: "disclaimer_accepted",
  DISCLAIMER_ACCEPTED_AT: "disclaimer_accepted_at",
  ONBOARDING_COMPLETED: "onboarding_completed",
};

export const storage = {
  // ============ Onboarding ==========
  async getOnboardingCompleted() {
    try {
      const val = await AsyncStorage.getItem(STORAGE_KEYS.ONBOARDING_COMPLETED);
      return val === "true";
    } catch (error) {
      console.error("Error getting onboarding completed:", error);
      return false;
    }
  },

  async setOnboardingCompleted(value = true) {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEYS.ONBOARDING_COMPLETED,
        value ? "true" : "false"
      );
    } catch (error) {
      console.error("Error setting onboarding completed:", error);
    }
  },

  // ============ Disclaimer Acceptance ==========
  async getDisclaimerAccepted() {
    try {
      const val = await AsyncStorage.getItem(STORAGE_KEYS.DISCLAIMER_ACCEPTED);
      return val === "true";
    } catch (error) {
      console.error("Error getting disclaimer accepted:", error);
      return false;
    }
  },

  async acceptDisclaimer() {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.DISCLAIMER_ACCEPTED, "true");
      await AsyncStorage.setItem(
        STORAGE_KEYS.DISCLAIMER_ACCEPTED_AT,
        new Date().toISOString()
      );
    } catch (error) {
      console.error("Error accepting disclaimer:", error);
    }
  },

  async getDisclaimerAcceptedAt() {
    try {
      return await AsyncStorage.getItem(STORAGE_KEYS.DISCLAIMER_ACCEPTED_AT);
    } catch (error) {
      console.error("Error getting disclaimer accepted at:", error);
      return null;
    }
  },

  // ============ Recent Searches ============
  /**
   * Save a search query to the recent searches list
   * Keeps only the last 5 searches
   * @param {string} query - The search query to save
   */
  async saveRecentSearch(query) {
    try {
      if (!query || query.trim().length === 0) return;

      const searches = await this.getRecentSearches();
      // Remove duplicate if exists
      const filtered = searches.filter(
        (s) => s.toLowerCase() !== query.toLowerCase()
      );
      // Add new search to front and keep only last 5
      const updated = [query, ...filtered].slice(0, 5);
      await AsyncStorage.setItem(
        STORAGE_KEYS.RECENT_SEARCHES,
        JSON.stringify(updated)
      );
    } catch (error) {
      console.error("Error saving recent search:", error);
    }
  },

  /**
   * Retrieve the list of recent searches
   * @returns {Promise<Array>} Array of recent search queries
   */
  async getRecentSearches() {
    try {
      const searches = await AsyncStorage.getItem(STORAGE_KEYS.RECENT_SEARCHES);
      return searches ? JSON.parse(searches) : [];
    } catch (error) {
      console.error("Error getting recent searches:", error);
      return [];
    }
  },

  /**
   * Clear all recent searches
   */
  async clearRecentSearches() {
    try {
      await AsyncStorage.removeItem(STORAGE_KEYS.RECENT_SEARCHES);
    } catch (error) {
      console.error("Error clearing recent searches:", error);
    }
  },

  // ============ UX Flags ==========
  /**
   * Once set, the Home screen should never show the "Recent Searches" section again.
   * This is persisted as a setting so it survives app restarts.
   */
  async getHideRecentSearches() {
    return await this.getSetting("hideRecentSearches", false);
  },

  async setHideRecentSearches(value = true) {
    await this.saveSetting("hideRecentSearches", Boolean(value));
  },

  // ============ Viewed Guides ============
  /**
   * Mark a guide as viewed by the user
   * Tracks viewing history with timestamp
   * @param {string} guideId - The ID of the guide
   * @param {string} title - The title of the guide
   * @param {string} category - The category of the guide
   */
  async markGuideAsViewed(guideId, title, category) {
    try {
      const viewed = await this.getViewedGuides();
      const newEntry = {
        guideId,
        title,
        category,
        viewedAt: new Date().toISOString(),
      };

      // Remove if already exists to update timestamp
      const filtered = viewed.filter((entry) => entry.guideId !== guideId);
      // Add to front and keep last 50 viewed guides
      const updated = [newEntry, ...filtered].slice(0, 50);

      await AsyncStorage.setItem(
        STORAGE_KEYS.VIEWED_GUIDES,
        JSON.stringify(updated)
      );
    } catch (error) {
      console.error("Error marking guide as viewed:", error);
    }
  },

  /**
   * Get list of all guides that user has viewed
   * @returns {Promise<Array>} Array of viewed guide objects
   */
  async getViewedGuides() {
    try {
      const viewed = await AsyncStorage.getItem(STORAGE_KEYS.VIEWED_GUIDES);
      return viewed ? JSON.parse(viewed) : [];
    } catch (error) {
      console.error("Error getting viewed guides:", error);
      return [];
    }
  },

  /**
   * Check if a specific guide has been viewed
   * @param {string} guideId - The ID of the guide
   * @returns {Promise<boolean>} True if guide has been viewed
   */
  async isGuideViewed(guideId) {
    const viewed = await this.getViewedGuides();
    return viewed.some((entry) => entry.guideId === guideId);
  },

  /**
   * Clear all viewed guides history
   */
  async clearViewedGuides() {
    try {
      await AsyncStorage.removeItem(STORAGE_KEYS.VIEWED_GUIDES);
    } catch (error) {
      console.error("Error clearing viewed guides:", error);
    }
  },

  // ============ Favorites (existing) ============
  async addFavorite(guideId) {
    try {
      const favorites = await this.getFavorites();
      if (!favorites.includes(guideId)) {
        favorites.push(guideId);
        await AsyncStorage.setItem(
          STORAGE_KEYS.FAVORITES,
          JSON.stringify(favorites)
        );
      }
    } catch (error) {
      console.error("Error adding favorite:", error);
    }
  },

  async removeFavorite(guideId) {
    try {
      const favorites = await this.getFavorites();
      const filtered = favorites.filter((id) => id !== guideId);
      await AsyncStorage.setItem(
        STORAGE_KEYS.FAVORITES,
        JSON.stringify(filtered)
      );
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  },

  async getFavorites() {
    try {
      const favorites = await AsyncStorage.getItem(STORAGE_KEYS.FAVORITES);
      return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
      console.error("Error getting favorites:", error);
      return [];
    }
  },

  async isFavorite(guideId) {
    const favorites = await this.getFavorites();
    return favorites.includes(guideId);
  },

  // ============ History (existing) ============
  async addToHistory(guideId, title) {
    try {
      const history = await this.getHistory();
      const newEntry = { guideId, title, timestamp: new Date().toISOString() };
      const filtered = history.filter((entry) => entry.guideId !== guideId);
      const updated = [newEntry, ...filtered].slice(0, 20); // Keep last 20
      await AsyncStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(updated));
    } catch (error) {
      console.error("Error adding to history:", error);
    }
  },

  async getHistory() {
    try {
      const history = await AsyncStorage.getItem(STORAGE_KEYS.HISTORY);
      return history ? JSON.parse(history) : [];
    } catch (error) {
      console.error("Error getting history:", error);
      return [];
    }
  },

  async clearHistory() {
    try {
      await AsyncStorage.removeItem(STORAGE_KEYS.HISTORY);
    } catch (error) {
      console.error("Error clearing history:", error);
    }
  },

  // ============ Offline Data ============
  /**
   * Cache all first aid data locally for offline access
   * @param {Object} data - The first aid data object
   */
  async saveOfflineData(data) {
    try {
      const offlineData = {
        data,
        savedAt: new Date().toISOString(),
        version: "1.0",
      };
      await AsyncStorage.setItem(
        STORAGE_KEYS.OFFLINE_DATA,
        JSON.stringify(offlineData)
      );
      console.log("Offline data cached successfully");
    } catch (error) {
      console.error("Error saving offline data:", error);
    }
  },

  /**
   * Retrieve cached offline data
   * @returns {Promise<Object|null>} The cached data or null if not available
   */
  async getOfflineData() {
    try {
      const offlineData = await AsyncStorage.getItem(STORAGE_KEYS.OFFLINE_DATA);
      if (offlineData) {
        const parsed = JSON.parse(offlineData);
        return parsed.data;
      }
      return null;
    } catch (error) {
      console.error("Error retrieving offline data:", error);
      return null;
    }
  },

  /**
   * Get offline data metadata (timestamp, version)
   * @returns {Promise<Object|null>} Metadata or null
   */
  async getOfflineDataMetadata() {
    try {
      const offlineData = await AsyncStorage.getItem(STORAGE_KEYS.OFFLINE_DATA);
      if (offlineData) {
        const parsed = JSON.parse(offlineData);
        return {
          savedAt: parsed.savedAt,
          version: parsed.version,
        };
      }
      return null;
    } catch (error) {
      console.error("Error getting offline metadata:", error);
      return null;
    }
  },

  /**
   * Clear cached offline data
   */
  async clearOfflineData() {
    try {
      await AsyncStorage.removeItem(STORAGE_KEYS.OFFLINE_DATA);
    } catch (error) {
      console.error("Error clearing offline data:", error);
    }
  },

  // ============ Settings (existing) ============
  async getSettings() {
    try {
      const settings = await AsyncStorage.getItem(STORAGE_KEYS.SETTINGS);
      return settings
        ? JSON.parse(settings)
        : { theme: "light", notifications: true };
    } catch (error) {
      console.error("Error getting settings:", error);
      return { theme: "light", notifications: true };
    }
  },

  async getSetting(key, defaultValue = null) {
    try {
      const settings = await this.getSettings();
      return settings[key] !== undefined ? settings[key] : defaultValue;
    } catch (error) {
      console.error("Error getting setting:", error);
      return defaultValue;
    }
  },

  async saveSetting(key, value) {
    try {
      const current = await this.getSettings();
      const updated = { ...current, [key]: value };
      await AsyncStorage.setItem(
        STORAGE_KEYS.SETTINGS,
        JSON.stringify(updated)
      );
    } catch (error) {
      console.error("Error saving setting:", error);
    }
  },

  async updateSettings(newSettings) {
    try {
      const current = await this.getSettings();
      const updated = { ...current, ...newSettings };
      await AsyncStorage.setItem(
        STORAGE_KEYS.SETTINGS,
        JSON.stringify(updated)
      );
    } catch (error) {
      console.error("Error updating settings:", error);
    }
  },

  // ============ Utility Methods ============
  /**
   * Get storage usage statistics
   * @returns {Promise<Object>} Object with counts of each storage type
   */
  async getStorageStats() {
    try {
      return {
        favorites: (await this.getFavorites()).length,
        history: (await this.getHistory()).length,
        recentSearches: (await this.getRecentSearches()).length,
        viewedGuides: (await this.getViewedGuides()).length,
        hasOfflineData: (await this.getOfflineData()) !== null,
      };
    } catch (error) {
      console.error("Error getting storage stats:", error);
      return {
        favorites: 0,
        history: 0,
        recentSearches: 0,
        viewedGuides: 0,
        hasOfflineData: false,
      };
    }
  },

  /**
   * Clear all stored data
   */
  async clearAll() {
    try {
      await AsyncStorage.multiRemove(Object.values(STORAGE_KEYS));
      console.log("All storage cleared");
    } catch (error) {
      console.error("Error clearing storage:", error);
    }
  },
};

export default storage;
