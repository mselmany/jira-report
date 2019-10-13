import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";

import { getSprints } from "../mock";

export default function useSprints(page = 0) {
  const [sprints, setSprints] = useState([]);
  const [startAt, setStartAt] = useState(page);
  const [isLast, setIsLast] = useState(false);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    async function g() {
      const r = await getSprints(startAt);

      if (r && !r.isLast /* && r.startAt === startAt */) {
        const sprintlist = modify(r.values);
        setSprints((s) => s.concat(sprintlist).sort(sortSprints));
        // setStartAt((a) => a + r.startAt);
        setIsLast(r.isLast);
      }
    }

    g();
  }, [startAt]);

  useEffect(() => {
    setFilters(extractFilters(sprints));
  }, [sprints]);

  function updatePage(p) {
    setStartAt(p);
  }

  return { sprints, startAt, isLast, updatePage, filters };
}

function modify(sprints) {
  return sprints.map((item) => {
    item.__computed = {
      completeDate: format(new Date(item.completeDate), "dd MMM yy"),
      endDate: format(new Date(item.endDate), "dd MMM yy"),
      startDate: format(new Date(item.startDate), "dd MMM yy"),
      filterTag: format(new Date(item.completeDate), "MMM yy"),
      timestamp: new Date(item.completeDate).getTime()
    };
    return item;
  });
}

function sortSprints(p, n) {
  return p.__computed.timestamp > n.__computed.timestamp ? 1 : -1;
}

function extractFilters(sprints) {
  return sprints.map((s) => s.__computed.filterTag).filter((s, index, self) => self.indexOf(s) === index);
}
