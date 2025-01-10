import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

class ApiService {
  private instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => this.handleRequest(config),
      (error: AxiosError) => this.handleError(error)
    );

    this.instance.interceptors.response.use(
      (response: AxiosResponse) => this.handleResponse(response),
      (error: AxiosError) => this.handleError(error)
    );
  }

  private handleRequest(
    config: InternalAxiosRequestConfig
  ): InternalAxiosRequestConfig {
    // const token = localStorage.getItem("authToken");
    // if (token && config.headers) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  }

  private handleResponse(response: AxiosResponse) {
    return response.data;
  }

  private handleError(error: AxiosError) {
    return Promise.reject({
      message: this.handleErrorMessage(error),
      status: error.status,
    });
  }

  public handleErrorMessage(error: unknown): string {
    const errorMessage =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (error as any)?.response?.data?.message || // Axios-style ошибки
      (error as Error).message || // Ошибки типа Error
      "An unexpected error occurred";

    return errorMessage;
  }

  public get<T>(url: string, params?: object): Promise<AxiosResponse<T>> {
    return this.instance.get<T>(url, { params });
  }

  public post<T, D>(url: string, data?: D): Promise<AxiosResponse<T>> {
    return this.instance.post<T>(url, data);
  }

  public put<T, D>(url: string, data?: D): Promise<AxiosResponse<T>> {
    return this.instance.put<T>(url, data);
  }

  public delete<T>(url: string): Promise<AxiosResponse<T>> {
    return this.instance.delete<T>(url);
  }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const apiService = new ApiService(process.env.NEXT_PUBLIC_API_URL);

export default apiService;
