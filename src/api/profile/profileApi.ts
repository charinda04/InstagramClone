import BaseApi from '../baseApi';
class ProfileApi extends BaseApi {
  async getGender(): Promise<any> {
    return this.getAsync<any>('/api/v2/players/genders');
  }
}

export default new ProfileApi();
