import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";
import { Participants } from "../api/types/matchTypes";

export default function Tile(props: Participants) {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{props.summonerName}</p>
          <p className="text-small text-default-500">{props.championName}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>
          {props.kills}/{props.deaths}/{props.assists}
        </p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          {(
            Math.round(((props.kills + props.assists) / props.deaths) * 100) /
            100
          ).toFixed(2)}
        </Link>
      </CardFooter>
    </Card>
  );
}
