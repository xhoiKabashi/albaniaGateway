/* eslint-disable react/no-unescaped-entities */
import { TypographyH2, TypographyH3 } from "@/components/atoms/TypographyH2";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="py-16 min-h-screen relative">
      <title>
        The Tale of Two Leks: Understanding Albania’s Currency Confusion
      </title>
      <meta
        name="description"
        content="A comprehensive guide to understanding Albania's currency confusion, covering the history of the Lek, the 'Old Lek' vs. 'New Lek' myth, and tips for tourists to avoid misunderstandings. Learn how to navigate Albanian currency and ensure you're paying the correct amount."
      />
      <meta
        name="keywords"
        content="Albanian currency, Lek, Old Lek, New Lek, Albania tourism, Currency confusion, Travel tips Albania, Currency reform, Bank of Albania, Tourist traps"
      />

      <header className="w-full h-64 relative">
        <Image
          alt="Image of the Albanian lek Banknotes, 200 and 500, 1000 and 2000 Lek"
          src={"/lek.jpg"}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black opacity-50 "></div>
      </header>
      <div className="relative -inset-y-14 flex items-center text-back justify-center text-white  text-center md:text-4xl font-bold px-3">
        The Tale of Two Leks: Understanding Albania’s Currency Confusion
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <section className=" w-[90%] md:w-[70%] text-balance  space-y-3">
          <TypographyH2 text="Introduction" />

          <p>
            Albania, a country steeped in history and boasting stunning
            landscapes, is a popular tourist destination. But for first-time
            visitors, navigating the currency can be a bit tricky. You might
            encounter terms like "old lek" and "new lek," leaving you scratching
            your head and wondering how much that charming souvenir actually
            costs.
          </p>
          <br />
          <p>
            Fear not, fellow traveler! Here's a breakdown of Albanian currency
            and how to avoid any confusion.
          </p>

          <TypographyH3 text="The Lek: The Official Currency of Albania:" />

          <p>
            Albania's official currency is the Lek, denoted by Lek or ALL. Coins
            come in denominations of 50qindarka (cents) and 1, 5, 10, 20, and 50
            lekë. Banknotes come in denominations of 100 (approximately 1 Eur),
            200 (approximately 2 Eur), 500 (approximately 5 Eur), 1000
            (approximately 10 Eur), 2000 (approximately 20 Eur), and 5000 lekë
            (approximately 50 Eur)
          </p>

          <TypographyH3 text="The 'Old Lek' vs. 'New Lek' Myth" />
          <p>
            In 1965, Albania underwent a currency reform. The government
            essentially removed a zero from prices by exchanging 10 old lek for
            1 new lek. This means 1000 old lek would be equivalent to 100 new
            lek.
          </p>
          <p>
            Despite this change happening over 50 years ago, many Albanians,
            particularly older generations, still refer to pre-reform lek as
            "old lek" and the current lek as "new lek." This can be confusing
            for tourists, leading to misunderstandings about prices.
          </p>
          <TypographyH3 text="The confusion" />

          <p>
            The Confusion This dual terminology can lead to confusion,
            particularly for foreigners. For instance, a loaf of bread might
            cost 100 Lek (1 Euro ), but if the seller speaks in Old Lek, they
            would say that the loaf of bread costs one thousand Lek (but 1,000
            Lek actually equals 10 Euro)
            <br />
            In smaller cities, it is common to write the price in Old Lek, for
            example, the written price for a 1kg bag of rice can be 1,500 Lek,
            while the real value is just 150 Lek.
          </p>
          <TypographyH3 text="The Impact on Tourists &  The Solution" />
          <p>
            Foreigners often struggle with this concept and may end up paying
            more for products than they would if just “Lek” was used2. A
            souvenir may be priced at “one thousand Lek,” which sounds like
            1,000 Lek. But the vendor means 1,000 old Lek, which is 10,000 new
            Lek – a tenfold difference3.
          </p>
          <p>
            To address this issue, the Bank of Albania (BoA) launched a national
            educational campaign in November 202112. The campaign, titled ‘Just
            Lek. Neither old Nor New’, aims to raise awareness among people to
            stop using the New and Old terms concerning Lek when carrying
            financial transactions1. The goal is to highlight that Lek is the
            official currency of Albania and that the nominal value is the
            actual value stated on a note or coin1.
          </p>

          <TypographyH3 text="Avoiding Tourist Traps" />
          <p>
            Always ask the price in new lek. This eliminates any confusion and
            ensures you're paying the correct amount.
          </p>
          <p>
            Carry small denominations. Having a variety of lekë bills will make
            it easier to pay for smaller purchases and receive correct change.
          </p>
          <p>
            Be wary of street vendors who use "old lek" terminology. While some
            may be simply using an old habit, it's always best to clarify the
            price in new lek to avoid being overcharged.
          </p>
        </section>
      </div>
    </div>
  );
}
