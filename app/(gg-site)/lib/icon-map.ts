import { IconId } from './definitions';
import { Sprout, Scissors, Mountain, Droplets, TreePine, Flower } from 'lucide-react';
import { LucideProps } from 'lucide-react';

export const ICON_MAP: Record<IconId, React.ComponentType<LucideProps>> = {
    "Sprout": Sprout,
    "Scissors": Scissors,
    "Mountain": Mountain,
    "Droplets": Droplets,
    "TreePine": TreePine,
    "Flower": Flower
}