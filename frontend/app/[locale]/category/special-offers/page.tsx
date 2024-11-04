import React from 'react'
import { BookshelfSection } from '@/app/components/BookshelfSection'
import { BookCover } from '@/app/components/BookCover'
import { Tag01Icon } from 'hugeicons-react'
import { Books } from '@/app/components/Books'

const SpecialOffersPage = () => {
  return (
    <>
      <BookshelfSection>
        <div className="container z-[1] mx-auto">
          <div className="flex flex-col-reverse items-start px-6 sm:flex-row sm:items-end">
            <span className="relative mt-10 sm:mt-20">
              <BookCover
                key="/images/books/way-of-life.png"
                pictureUrl="/images/books/way-of-life.png"
                size="small"
              />
            </span>

            <header className="mt-10 flex flex-col gap-2 sm:mb-24 sm:ml-10 sm:mt-0 sm:w-1/3">
              <h3 className="inline-flex items-center gap-1 text-3xl font-bold">
                <Tag01Icon size={32} strokeWidth={2} />
                <span className="relative top-[3px]">Special offers</span>
              </h3>
              <p className="opacity-75">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est tempora quo eius
                deserunt aliquid ea. Necessitatibus corporis molestiae omnis deserunt voluptate
                voluptatibus minima facere, cum officia vel.
              </p>
            </header>
          </div>
        </div>
      </BookshelfSection>
      <Books />
    </>
  )
}

export default SpecialOffersPage
