import { Loading } from "../components/loading";

interface LaunchScreenProps {
  isLoading: boolean;
}

export function LaunchScreen({ isLoading }: LaunchScreenProps) {
  if (isLoading) {
    return (
      <div className="grid h-screen w-full place-items-center bg-transparent">
        <Loading className="size-12" />
      </div>
    );
  }
  return null;
}
