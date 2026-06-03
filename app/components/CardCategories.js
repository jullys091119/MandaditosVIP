import { Avatar, Image, Flex } from "@mantine/core";
import { Cute_Font } from "next/font/google";
import Link from "next/link";
function CardCategories({ id, name, img }) {
  return (
    <Link href={`/categories/${id}`}>
      <Flex direction="column" align="center">
        <Avatar shadow="" padding="lg" size="lg">
          <Image src={img} alt="Norway" fit="cover" />
        </Avatar>
        {name.length > 9 ? name.slice(0, 9) + "..." : name}
      </Flex>
    </Link>
  );
}

export default CardCategories;
