function CurrentWeatherCardEmpty() {
  return (
    <div 
      className="rounded-md p-4 
        desktop:p-8 bg-white/30 border-solid border-2 border-gray"
      >
      <div className="flex flex-col desktop:flex-row gap-4">
        <div className="text-center desktop:text-left">
          <p>-</p>
          <p>-</p>
        </div>
        <div className="text-center desktop:text-left">
          <p className="text-xl desktop:text-4xl font-bold">
            -
          </p>
          <p className="text-lg desktop:text-xl">-</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeatherCardEmpty;