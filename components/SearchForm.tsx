import React from "react";
import Form from "next/form";
import SearchFormRest from "./SearchFormRest";
import { Search } from "lucide-react";
const SearchForm = ({ query }: { query?: string }) => {
  
  return (
    <Form action="/" scroll={false} className=" search-form">
      <input
        type="text"
        name="query"
        defaultValue={query}
        placeholder="Search for startup ideas"
        className="search-input"
      />
      <div className=" flex gap-2">
        {query && <SearchFormRest />}

        <button type="submit" className="search-btn text-white">
          <Search className="size-5"/>
        </button>
        </div>
    </Form>
  );
};

export default SearchForm;