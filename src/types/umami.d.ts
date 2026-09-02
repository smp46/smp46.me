interface Umami {
  track: {
    (event_name: string, event_data?: Record<string, any>): void;
    (custom_fn: (props: Record<string, any>) => Record<string, any>): void;
  };
}

interface Window {
  umami?: Umami;
}
