interface Window {
  invokeNative: (native: string, arg: string) => void;
  GetParentResourceName: () => string;
  nuiHandoverData: NuiHandoverData;
}

interface NuiHandoverData {
  name: string;
  id: number;
  steamid: string;
}