import { MapPin, Mic, Search, ShoppingCart } from 'lucide-react'
import { Input } from '~/components/ui/input'

export const SearchBar = () => {
  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between text-gray-400'>
        <div className='flex items-center space-x-1'>
          <MapPin className='size-4' />

          <span className='font-medium text-sm'>Aracaju-SE</span>
        </div>

        <div className='flex items-center justify-center rounded-full bg-gray-800 p-2'>
          <ShoppingCart className='size-5' />
        </div>
      </div>

      <div className='relative'>
        <div className='-translate-y-1/2 absolute top-1/2 left-3.5'>
          <Search className='size-5.5' />
        </div>

        <Input
          placeholder='Buscar filmes, cinemas...'
          className='h-12 rounded-xl border-gray-700 bg-gray-800 pr-14 pl-12 text-sm focus-visible:border-gray-700 focus-visible:ring-0'
        />

        <div className='-translate-y-1/2 absolute top-1/2 right-3.5 cursor-pointer border-gray-700 border-l pl-2.5 text-gray-400'>
          <Mic className='size-5.5' />
        </div>
      </div>
    </div>
  )
}
