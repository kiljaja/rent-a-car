import styled from 'styled-components';
import tw from 'twin.macro';

interface ButtonProps {
  theme?: 'filled' | 'outlined';
  text: string;
  handleClick(): void;
}

const BaseButton = styled.button`
  ${tw`
    m-1
    outline-none
    focus:outline-none
    border-2
    border-transparent
    rounded-md
    px-5
    py-3
    text-xs
    font-semibold
    text-white
    transition-all
    duration-200
    ease-in-out
  `}
`;

const OutlinedButton = styled(BaseButton)`
  ${tw`
    hover:border-red-500
    bg-red-500
    hover:bg-transparent
    hover:text-red-500
  `}
`;

const FilledButton = styled(BaseButton)`
  ${tw`
    border-red-500
    hover:border-transparent
    bg-transparent
    hover:bg-red-500
    text-red-500
    hover:text-white
  `}
`;

export function Button({ theme, text, handleClick }: ButtonProps) {
  if (theme === 'filled') return <FilledButton>{text}</FilledButton>;
  return <OutlinedButton>{text}</OutlinedButton>;
}
