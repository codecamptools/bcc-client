import { getInstance } from "@bcwdev/auth0-vue";

const authService = getInstance();

export class Resources {
  static async request(url, options = {}) {
    try {
      if (!url.includes("//")) {
        url = window.location.origin + url[0] == "/" ? url : "/" + url;
      }
      let res = await fetch(url, {
        method: "GET",
        headers: {
          authorization: authService.bearer
        },
        ...options
      });
      return await res.json();
    } catch (e) {
      throw e;
    }
  }

  static async get(url) {
    try {
      return await this.request(url);
    } catch (e) {
      throw e;
    }
  }
  static async post(url, data = {}) {
    try {
      return await this.request(url, {
        method: "POST",
        body: JSON.stringify(data)
      });
    } catch (e) {
      throw e;
    }
  }
  static async put(url, data = {}) {
    try {
      return await this.request(url, {
        method: "PUT",
        body: JSON.stringify(data)
      });
    } catch (e) {
      throw e;
    }
  }
  static async delete(url) {
    try {
      return await this.request(url, {
        method: "DELETE"
      });
    } catch (e) {
      throw e;
    }
  }
}
