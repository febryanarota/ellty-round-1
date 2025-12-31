"use client";

import { useState } from "react";
import Card from "../ui/card";
import Checkbox from "../ui/checkbox";
import Divider from "../ui/divider";
import Button from "../ui/button";

const PAGES = [
  { id: "page1", label: "Page 1" },
  { id: "page2", label: "Page 2" },
  { id: "page3", label: "Page 3" },
  { id: "page4", label: "Page 4" },
];

export default function PageSelector() {
  const [selected, setSelected] = useState<string[]>(["page1", "page2", "page3", "page4"]);

  const isAllSelected = selected.length === PAGES.length;

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelected([]); // Clear selection
    } else {
      setSelected(PAGES.map((p) => p.id)); // Select all IDs
    }
  };

  // Toggle individual page
  const handleTogglePage = (id: string) => {
    if (selected.includes(id)) {
      // If found, remove it
      setSelected(selected.filter((item) => item !== id));
    } else {
      // If not found, add it
      setSelected([...selected, id]);
    }
  };

  return (
    <Card className="flex flex-col w-[370px] p-4">
      {/* "All Pages" Checkbox */}
      <Checkbox
        label="All pages"
        checked={isAllSelected}
        onChange={handleSelectAll}
      />

      <Divider />

      {/* Map through the pages array */}
      <div className="flex flex-col gap-2">
        {PAGES.map((page) => (
          <Checkbox
            key={page.id}
            label={page.label}
            checked={selected.includes(page.id)}
            onChange={() => handleTogglePage(page.id)}
          />
        ))}
      </div>

      <Divider />

      <Button 
        className="w-full" 
        onClick={() => console.log("Selected IDs:", selected)}
      >
        Done
      </Button>
    </Card>
  );
}