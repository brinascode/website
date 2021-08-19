import { Heading, Box, HStack, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BlogMetadata } from 'types';
import Image from 'next/image';
import { MdAccessTime, MdEdit } from 'react-icons/md';

interface Props {
	metadata: BlogMetadata;
}
export default function BlogHeader({ metadata }: Props): JSX.Element {
	const [readTime, setReadTime] = useState(0);
	const tags = metadata.tags?.split(',').map((tag) => tag.trim());

	useEffect(() => {
		const text = document.getElementById('content')?.innerText;
		const wpm = 225;
		const words = text?.trim().split(/\s+/).length;
		setReadTime(Math.ceil((words as number) / wpm));
	}, []);

	return (
		<Stack mb="9" spacing={3}>
			<Heading as="h1" color="white" fontWeight="bold">
				{metadata.title}
			</Heading>
			<HStack spacing={4}>
				<HStack spacing={2}>
					{metadata.photo && (
						<Box w="6" rounded="full" h="6" pos="relative">
							<Image
								layout="fill"
								objectFit="cover"
								src={metadata.photo}
							/>
						</Box>
					)}
					<Text color="white" fontWeight="light">
						{metadata.author}
					</Text>
				</HStack>
				<HStack spacing={1}>
					<MdEdit size={16} color="#fff" />
					<Text color="white" fontWeight="light">
						{metadata.published}
					</Text>
				</HStack>
				<HStack spacing={1}>
					<MdAccessTime size={16} color="#fff" />
					<Text color="white" fontWeight="light">
						{readTime} min read
					</Text>
				</HStack>
			</HStack>
			<HStack>
				{tags?.map((tag, i) => (
					<Text
						key={i}
						px="2"
						py="1"
						border="1px"
						fontSize="sm"
						color="white"
						userSelect="none"
						borderRadius="md"
						fontWeight="medium"
						borderColor="#424242"
					>
						{tag.toUpperCase()}
					</Text>
				))}
			</HStack>
		</Stack>
	);
}
