window.BENCHMARK_DATA = {
  "lastUpdate": 1684240211719,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "0a6b26fd30f2de32604c82a28b047208b2c6705a",
          "message": "chore(deps): relock",
          "timestamp": "2023-05-16T08:14:28-04:00",
          "tree_id": "78ce76d79b1d30feee11ffd507257f46bd93f19d",
          "url": "https://github.com/ibis-project/ibis/commit/0a6b26fd30f2de32604c82a28b047208b2c6705a"
        },
        "date": 1684240128910,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 97.63699063744673,
            "unit": "iter/sec",
            "range": "stddev: 0.0008089972258464896",
            "extra": "mean: 10.242019888889017 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 234.81618536805078,
            "unit": "iter/sec",
            "range": "stddev: 0.00006931674371820098",
            "extra": "mean: 4.258650222226379 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 41.86107919600864,
            "unit": "iter/sec",
            "range": "stddev: 0.0005426084604787144",
            "extra": "mean: 23.88853845161612 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 110.73681135458718,
            "unit": "iter/sec",
            "range": "stddev: 0.000036719415085695415",
            "extra": "mean: 9.030420758621345 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 79.14646965235073,
            "unit": "iter/sec",
            "range": "stddev: 0.016540790157219074",
            "extra": "mean: 12.634802340426297 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10869973.491687562,
            "unit": "iter/sec",
            "range": "stddev: 5.019797988012985e-9",
            "extra": "mean: 91.99654449624411 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.58305341092933,
            "unit": "iter/sec",
            "range": "stddev: 0.0008819871264046265",
            "extra": "mean: 32.697846959997605 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 133.51071346709193,
            "unit": "iter/sec",
            "range": "stddev: 0.004099178577600971",
            "extra": "mean: 7.490035623594226 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 91.79808589164153,
            "unit": "iter/sec",
            "range": "stddev: 0.0010571295355308176",
            "extra": "mean: 10.893473325581104 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 38.655407409511014,
            "unit": "iter/sec",
            "range": "stddev: 0.0032721627006503697",
            "extra": "mean: 25.869601875000647 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5562862.193896668,
            "unit": "iter/sec",
            "range": "stddev: 1.1106094275720575e-8",
            "extra": "mean: 179.76357586136774 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2090.2026875570764,
            "unit": "iter/sec",
            "range": "stddev: 0.00009312812105660932",
            "extra": "mean: 478.4225022544343 usec\nrounds: 1109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1668363830572252,
            "unit": "iter/sec",
            "range": "stddev: 0.19341794130708861",
            "extra": "mean: 5.993896425200001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1170.9486122875983,
            "unit": "iter/sec",
            "range": "stddev: 0.000036717448439662846",
            "extra": "mean: 854.0084419643077 usec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 103.2808338681757,
            "unit": "iter/sec",
            "range": "stddev: 0.00010801714420927883",
            "extra": "mean: 9.682338557378104 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 534.1835636357027,
            "unit": "iter/sec",
            "range": "stddev: 0.00004091396965423535",
            "extra": "mean: 1.8720156666631738 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4483.8606029442035,
            "unit": "iter/sec",
            "range": "stddev: 0.000028662701355469515",
            "extra": "mean: 223.02209826580636 usec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2146.631566758972,
            "unit": "iter/sec",
            "range": "stddev: 0.00008462152144307309",
            "extra": "mean: 465.84612631492246 usec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 207.54541225412314,
            "unit": "iter/sec",
            "range": "stddev: 0.003723071692163848",
            "extra": "mean: 4.818222619999801 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12284.339222827206,
            "unit": "iter/sec",
            "range": "stddev: 0.00002684770092178177",
            "extra": "mean: 81.40445992746305 usec\nrounds: 3581"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 95.825113084738,
            "unit": "iter/sec",
            "range": "stddev: 0.0010423225729748419",
            "extra": "mean: 10.435677744681621 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 675.8984912344017,
            "unit": "iter/sec",
            "range": "stddev: 0.000031375658385389525",
            "extra": "mean: 1.479512105691622 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 77.66890551068559,
            "unit": "iter/sec",
            "range": "stddev: 0.02252966571293489",
            "extra": "mean: 12.875165337078442 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.44624557572756,
            "unit": "iter/sec",
            "range": "stddev: 0.00035930860783311286",
            "extra": "mean: 22.004017875001125 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1690130.7436231843,
            "unit": "iter/sec",
            "range": "stddev: 2.1682112268847733e-7",
            "extra": "mean: 591.6702028958243 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1930136.3925535667,
            "unit": "iter/sec",
            "range": "stddev: 1.4664059919262453e-7",
            "extra": "mean: 518.0981011797834 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.65576705832038,
            "unit": "iter/sec",
            "range": "stddev: 0.00040807823341551503",
            "extra": "mean: 9.119447401869438 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 99.33425933845591,
            "unit": "iter/sec",
            "range": "stddev: 0.000907591605231959",
            "extra": "mean: 10.06702024719143 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2044.7931297328798,
            "unit": "iter/sec",
            "range": "stddev: 0.00018139845090653567",
            "extra": "mean: 489.04702654719614 usec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 150445.6380034563,
            "unit": "iter/sec",
            "range": "stddev: 5.08060463903645e-7",
            "extra": "mean: 6.646919201319924 usec\nrounds: 25446"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.465539352766001,
            "unit": "iter/sec",
            "range": "stddev: 0.0002921238754814334",
            "extra": "mean: 118.12596437500034 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10554.18227710109,
            "unit": "iter/sec",
            "range": "stddev: 0.000002503399391069936",
            "extra": "mean: 94.74916897822133 usec\nrounds: 4829"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6018542.611448585,
            "unit": "iter/sec",
            "range": "stddev: 1.1626037377367847e-8",
            "extra": "mean: 166.1531810204287 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1954827.0923215437,
            "unit": "iter/sec",
            "range": "stddev: 1.698404008593325e-7",
            "extra": "mean: 511.5541952165214 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4522861.064401209,
            "unit": "iter/sec",
            "range": "stddev: 1.6483480806109143e-8",
            "extra": "mean: 221.09898707017277 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 95.72921086953343,
            "unit": "iter/sec",
            "range": "stddev: 0.0009125201831268132",
            "extra": "mean: 10.446132282056215 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.590579583670504,
            "unit": "iter/sec",
            "range": "stddev: 0.0003776588350023946",
            "extra": "mean: 33.79453914285099 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 274.7081010582942,
            "unit": "iter/sec",
            "range": "stddev: 0.00039436824582188143",
            "extra": "mean: 3.6402275584431925 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8461811200163631,
            "unit": "iter/sec",
            "range": "stddev: 0.01419994688790851",
            "extra": "mean: 1.1817800897999973 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 81.44368907582879,
            "unit": "iter/sec",
            "range": "stddev: 0.00022992207704550176",
            "extra": "mean: 12.278422200017758 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 126.07406742117448,
            "unit": "iter/sec",
            "range": "stddev: 0.00008629212221200685",
            "extra": "mean: 7.931845306928261 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 95.903141203156,
            "unit": "iter/sec",
            "range": "stddev: 0.0011435005165720867",
            "extra": "mean: 10.427187133335439 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 77.7471676903392,
            "unit": "iter/sec",
            "range": "stddev: 0.023515013494055777",
            "extra": "mean: 12.862204884207753 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 307.7222253741146,
            "unit": "iter/sec",
            "range": "stddev: 0.00019029136740155976",
            "extra": "mean: 3.2496840252089223 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 98.65913337208039,
            "unit": "iter/sec",
            "range": "stddev: 0.0009261993518606631",
            "extra": "mean: 10.135909021505663 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 91.3792776418725,
            "unit": "iter/sec",
            "range": "stddev: 0.00036774592833030314",
            "extra": "mean: 10.943400142854406 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2015.1996450426177,
            "unit": "iter/sec",
            "range": "stddev: 0.000118990404658433",
            "extra": "mean: 496.22874957327207 usec\nrounds: 1174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 188.72043765526735,
            "unit": "iter/sec",
            "range": "stddev: 0.00005953058514414001",
            "extra": "mean: 5.298843158824612 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1806.655894999318,
            "unit": "iter/sec",
            "range": "stddev: 0.000006117409446646168",
            "extra": "mean: 553.5088351732733 usec\nrounds: 1268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 45.90792430312408,
            "unit": "iter/sec",
            "range": "stddev: 0.0006700056184079447",
            "extra": "mean: 21.78273174359027 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1356.277369613551,
            "unit": "iter/sec",
            "range": "stddev: 0.008745361665460187",
            "extra": "mean: 737.3123097120861 usec\nrounds: 1143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6253818770517663,
            "unit": "iter/sec",
            "range": "stddev: 0.0040025958806935834",
            "extra": "mean: 615.2400331999957 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 82.83827312402279,
            "unit": "iter/sec",
            "range": "stddev: 0.0007200813702483412",
            "extra": "mean: 12.071714707316898 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 99.68426343174264,
            "unit": "iter/sec",
            "range": "stddev: 0.000972580378132836",
            "extra": "mean: 10.031673662159681 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 148.52473230129164,
            "unit": "iter/sec",
            "range": "stddev: 0.0002519769275311701",
            "extra": "mean: 6.732885388888888 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 198.5750480994057,
            "unit": "iter/sec",
            "range": "stddev: 0.00005948952841941016",
            "extra": "mean: 5.035879429823453 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 273.389975633374,
            "unit": "iter/sec",
            "range": "stddev: 0.00034429212994403736",
            "extra": "mean: 3.657778591490995 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.0179028058145,
            "unit": "iter/sec",
            "range": "stddev: 0.0009787268228309157",
            "extra": "mean: 29.396286000002192 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 758.4775132989004,
            "unit": "iter/sec",
            "range": "stddev: 0.000018789968227771222",
            "extra": "mean: 1.3184306488542141 msec\nrounds: 524"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7816517574006702,
            "unit": "iter/sec",
            "range": "stddev: 0.010354697063548433",
            "extra": "mean: 1.2793420989999844 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 242.69632792790284,
            "unit": "iter/sec",
            "range": "stddev: 0.0006106867738021878",
            "extra": "mean: 4.120375485438195 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2723845.61821507,
            "unit": "iter/sec",
            "range": "stddev: 2.4960471175912568e-8",
            "extra": "mean: 367.1280021569036 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 69.93091600178941,
            "unit": "iter/sec",
            "range": "stddev: 0.032098219472927375",
            "extra": "mean: 14.299826988887315 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 100.86417450250092,
            "unit": "iter/sec",
            "range": "stddev: 0.0010122150234087414",
            "extra": "mean: 9.914322948979324 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.440621820615178,
            "unit": "iter/sec",
            "range": "stddev: 0.000870441368263579",
            "extra": "mean: 48.922190761900424 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 275.1904355009331,
            "unit": "iter/sec",
            "range": "stddev: 0.0003890272590409853",
            "extra": "mean: 3.633847223576959 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 49.431008001192986,
            "unit": "iter/sec",
            "range": "stddev: 0.0002458276640488213",
            "extra": "mean: 20.23021662790825 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 170.85785336168058,
            "unit": "iter/sec",
            "range": "stddev: 0.00017887279528377848",
            "extra": "mean: 5.852818470586477 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2025.3022284928193,
            "unit": "iter/sec",
            "range": "stddev: 0.00010236295441163288",
            "extra": "mean: 493.75346846093964 usec\nrounds: 1189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6154788.708977051,
            "unit": "iter/sec",
            "range": "stddev: 1.1447074804836615e-8",
            "extra": "mean: 162.47511446517288 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 255.31390033446326,
            "unit": "iter/sec",
            "range": "stddev: 0.0006112014004379625",
            "extra": "mean: 3.9167471833299787 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2035.7993321726829,
            "unit": "iter/sec",
            "range": "stddev: 0.00010063731286491043",
            "extra": "mean: 491.2075488956772 usec\nrounds: 1585"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14060.813596649727,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022094909168408825",
            "extra": "mean: 71.1196399217091 usec\nrounds: 5596"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1036585.5971110989,
            "unit": "iter/sec",
            "range": "stddev: 2.3049615998169085e-7",
            "extra": "mean: 964.7056671315319 nsec\nrounds: 69931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 275.7250552406296,
            "unit": "iter/sec",
            "range": "stddev: 0.0003780904930520976",
            "extra": "mean: 3.6268013406590276 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 412.26818062174186,
            "unit": "iter/sec",
            "range": "stddev: 0.0000973927487131124",
            "extra": "mean: 2.4256055815219586 msec\nrounds: 368"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.47040410427646,
            "unit": "iter/sec",
            "range": "stddev: 0.001825736700930308",
            "extra": "mean: 404.79207359999236 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 90.051675140675,
            "unit": "iter/sec",
            "range": "stddev: 0.0010910791372547807",
            "extra": "mean: 11.104735125002852 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.746841471715488,
            "unit": "iter/sec",
            "range": "stddev: 0.0008628881270938176",
            "extra": "mean: 53.342319105261616 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8430.812053373476,
            "unit": "iter/sec",
            "range": "stddev: 0.000016358939072480847",
            "extra": "mean: 118.61253621468924 usec\nrounds: 3424"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.809079281216786,
            "unit": "iter/sec",
            "range": "stddev: 0.004621295029557935",
            "extra": "mean: 1.2359728189999941 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 93.16679038332803,
            "unit": "iter/sec",
            "range": "stddev: 0.0009235552198122913",
            "extra": "mean: 10.733438340910663 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 94.57207879902631,
            "unit": "iter/sec",
            "range": "stddev: 0.0011971993110351101",
            "extra": "mean: 10.57394542553183 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7124503.746300696,
            "unit": "iter/sec",
            "range": "stddev: 5.834558555808441e-9",
            "extra": "mean: 140.36065326226517 nsec\nrounds: 69926"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 266.1118666395237,
            "unit": "iter/sec",
            "range": "stddev: 0.0003619988658118678",
            "extra": "mean: 3.757818141024896 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 263.89639506322635,
            "unit": "iter/sec",
            "range": "stddev: 0.000453641874927083",
            "extra": "mean: 3.7893658977812565 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 96.61337954553984,
            "unit": "iter/sec",
            "range": "stddev: 0.0011414556958228475",
            "extra": "mean: 10.350533277108253 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2014.2866288634248,
            "unit": "iter/sec",
            "range": "stddev: 0.00011636048791117025",
            "extra": "mean: 496.45367529657733 usec\nrounds: 1352"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 76.26641285719319,
            "unit": "iter/sec",
            "range": "stddev: 0.025600967699081878",
            "extra": "mean: 13.111931747366604 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1999.1716709824543,
            "unit": "iter/sec",
            "range": "stddev: 0.0001312642486796738",
            "extra": "mean: 500.20716805604263 usec\nrounds: 1440"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.6510990801919,
            "unit": "iter/sec",
            "range": "stddev: 0.00010945972516596705",
            "extra": "mean: 6.148129374194821 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.332111052528097,
            "unit": "iter/sec",
            "range": "stddev: 0.0008635364494119156",
            "extra": "mean: 750.6881637999982 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}