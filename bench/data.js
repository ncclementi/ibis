window.BENCHMARK_DATA = {
  "lastUpdate": 1679100165642,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "6155f24003f72ca2ea026eaf99148febbf29d6b4",
          "message": "chore(flake/poetry2nix): `d45ca6fb` -> `9ce22528`",
          "timestamp": "2023-03-18T00:30:35Z",
          "tree_id": "c43915a302ac63e8052dc1d91eb9352b41dd84e7",
          "url": "https://github.com/ibis-project/ibis/commit/6155f24003f72ca2ea026eaf99148febbf29d6b4"
        },
        "date": 1679100074926,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 85.82478705429867,
            "unit": "iter/sec",
            "range": "stddev: 0.00996899867057793",
            "extra": "mean: 11.651645571428348 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 86.37062251833201,
            "unit": "iter/sec",
            "range": "stddev: 0.000524788114480496",
            "extra": "mean: 11.57801079629537 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7933181778791232,
            "unit": "iter/sec",
            "range": "stddev: 0.013611460928449068",
            "extra": "mean: 1.2605282821999935 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 282.9675077202525,
            "unit": "iter/sec",
            "range": "stddev: 0.00026982922979523955",
            "extra": "mean: 3.5339746533323555 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.30355852089387,
            "unit": "iter/sec",
            "range": "stddev: 0.006875504310342153",
            "extra": "mean: 434.1109596000024 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5128.717866425598,
            "unit": "iter/sec",
            "range": "stddev: 0.00006115681719598271",
            "extra": "mean: 194.98050507834597 usec\nrounds: 2560"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 669.2199543734926,
            "unit": "iter/sec",
            "range": "stddev: 0.00011234579685411193",
            "extra": "mean: 1.4942770212764735 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 439701.8979011409,
            "unit": "iter/sec",
            "range": "stddev: 6.374594977807989e-7",
            "extra": "mean: 2.274268100213732 usec\nrounds: 1906"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2415449.9249099544,
            "unit": "iter/sec",
            "range": "stddev: 7.860165707311167e-8",
            "extra": "mean: 414.001544676048 nsec\nrounds: 93450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 123.95570907775695,
            "unit": "iter/sec",
            "range": "stddev: 0.00035603751124088916",
            "extra": "mean: 8.067397681317798 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 459.113244194005,
            "unit": "iter/sec",
            "range": "stddev: 0.00019690455922131804",
            "extra": "mean: 2.178111855073027 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1495331.053031919,
            "unit": "iter/sec",
            "range": "stddev: 8.507853789177757e-7",
            "extra": "mean: 668.7482333576966 nsec\nrounds: 102031"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4763331.837436746,
            "unit": "iter/sec",
            "range": "stddev: 3.3748262311267085e-7",
            "extra": "mean: 209.93708482378423 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 101.82672773764709,
            "unit": "iter/sec",
            "range": "stddev: 0.000638349909456292",
            "extra": "mean: 9.820604297296718 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5070.823822031606,
            "unit": "iter/sec",
            "range": "stddev: 0.000068551994090788",
            "extra": "mean: 197.20661476252076 usec\nrounds: 2845"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4779.309362513476,
            "unit": "iter/sec",
            "range": "stddev: 0.00003081724811500666",
            "extra": "mean: 209.23525224031368 usec\nrounds: 1562"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.343726932766444,
            "unit": "iter/sec",
            "range": "stddev: 0.01772452527749671",
            "extra": "mean: 34.07883403124767 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 269.91129629209854,
            "unit": "iter/sec",
            "range": "stddev: 0.00022618492543601608",
            "extra": "mean: 3.7049208897051793 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 93.87408879075012,
            "unit": "iter/sec",
            "range": "stddev: 0.000727117532027534",
            "extra": "mean: 10.652566782608652 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 66.51680748064027,
            "unit": "iter/sec",
            "range": "stddev: 0.0003995476541547791",
            "extra": "mean: 15.033794282611206 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4299.63615232798,
            "unit": "iter/sec",
            "range": "stddev: 0.0001785777458149532",
            "extra": "mean: 232.57781927862976 usec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 90.18992498443869,
            "unit": "iter/sec",
            "range": "stddev: 0.011852359647864963",
            "extra": "mean: 11.087712958764953 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 93.52344121720314,
            "unit": "iter/sec",
            "range": "stddev: 0.000847648590320185",
            "extra": "mean: 10.692506466668117 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7533.287879043006,
            "unit": "iter/sec",
            "range": "stddev: 0.000017851280074877843",
            "extra": "mean: 132.7441637776672 usec\nrounds: 3346"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12564.743723133828,
            "unit": "iter/sec",
            "range": "stddev: 0.0000063812122364586505",
            "extra": "mean: 79.58777528894841 usec\nrounds: 5447"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 288.13870782994445,
            "unit": "iter/sec",
            "range": "stddev: 0.0002551473582841804",
            "extra": "mean: 3.4705507202808255 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 156.2622931763412,
            "unit": "iter/sec",
            "range": "stddev: 0.005105624969547743",
            "extra": "mean: 6.399496511109723 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9447595.376875218,
            "unit": "iter/sec",
            "range": "stddev: 1.312298716912625e-7",
            "extra": "mean: 105.8470393903196 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4615.092524269214,
            "unit": "iter/sec",
            "range": "stddev: 0.00007811855661695297",
            "extra": "mean: 216.68037958964797 usec\nrounds: 1852"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1581.71663832904,
            "unit": "iter/sec",
            "range": "stddev: 0.000040705777874917004",
            "extra": "mean: 632.2244931661222 usec\nrounds: 878"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 256.5649359156128,
            "unit": "iter/sec",
            "range": "stddev: 0.000337656531821886",
            "extra": "mean: 3.897648743119409 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 693565.8553293562,
            "unit": "iter/sec",
            "range": "stddev: 6.933068752924196e-7",
            "extra": "mean: 1.44182415024616 usec\nrounds: 21598"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 99.91600164595668,
            "unit": "iter/sec",
            "range": "stddev: 0.014915517311592968",
            "extra": "mean: 10.008406897059489 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 96.45594288050108,
            "unit": "iter/sec",
            "range": "stddev: 0.0010702111898331576",
            "extra": "mean: 10.367427554348792 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 78.64325237717844,
            "unit": "iter/sec",
            "range": "stddev: 0.0008392152961380347",
            "extra": "mean: 12.715649083330524 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 138010.55957353825,
            "unit": "iter/sec",
            "range": "stddev: 0.00003067297312845185",
            "extra": "mean: 7.245822371056723 usec\nrounds: 34482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4418.105142570055,
            "unit": "iter/sec",
            "range": "stddev: 0.00014109528425024836",
            "extra": "mean: 226.34137661519983 usec\nrounds: 1548"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 249.51524047122513,
            "unit": "iter/sec",
            "range": "stddev: 0.00042507939188359326",
            "extra": "mean: 4.007771221154417 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 82.17551171018482,
            "unit": "iter/sec",
            "range": "stddev: 0.0019250674415677348",
            "extra": "mean: 12.1690754239144 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 138.7261495593735,
            "unit": "iter/sec",
            "range": "stddev: 0.00036497892871194444",
            "extra": "mean: 7.208446303571695 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 50.56261948059117,
            "unit": "iter/sec",
            "range": "stddev: 0.0005253954415404242",
            "extra": "mean: 19.77745635555645 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 104.46518069521447,
            "unit": "iter/sec",
            "range": "stddev: 0.0008754990741033943",
            "extra": "mean: 9.57256756122004 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5264753.810826535,
            "unit": "iter/sec",
            "range": "stddev: 4.3412147857060324e-8",
            "extra": "mean: 189.94240489319057 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 270.66320948401017,
            "unit": "iter/sec",
            "range": "stddev: 0.00039537381558338975",
            "extra": "mean: 3.694628471695103 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 103.04290153426601,
            "unit": "iter/sec",
            "range": "stddev: 0.00020128231968067421",
            "extra": "mean: 9.704695666663257 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 90.02289227075713,
            "unit": "iter/sec",
            "range": "stddev: 0.0007913427255934055",
            "extra": "mean: 11.108285623531762 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 103.31766299577642,
            "unit": "iter/sec",
            "range": "stddev: 0.0008101950011593617",
            "extra": "mean: 9.678887142858425 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 250.34798135679193,
            "unit": "iter/sec",
            "range": "stddev: 0.0004948171263414203",
            "extra": "mean: 3.994440037344723 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1571686.1495439936,
            "unit": "iter/sec",
            "range": "stddev: 0.000003152500328049333",
            "extra": "mean: 636.2593449653663 nsec\nrounds: 185151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4464.129565028964,
            "unit": "iter/sec",
            "range": "stddev: 0.00008481934259464261",
            "extra": "mean: 224.0078352191626 usec\nrounds: 2033"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 89.700560588115,
            "unit": "iter/sec",
            "range": "stddev: 0.0012293497190932303",
            "extra": "mean: 11.148202346156758 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 143.5588551229125,
            "unit": "iter/sec",
            "range": "stddev: 0.0004942045592125188",
            "extra": "mean: 6.965784166666822 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 177.1437184455581,
            "unit": "iter/sec",
            "range": "stddev: 0.00022054716283018673",
            "extra": "mean: 5.645133842594208 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 255.7267974192417,
            "unit": "iter/sec",
            "range": "stddev: 0.0002009212070229213",
            "extra": "mean: 3.910423194173849 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 142.78236804483032,
            "unit": "iter/sec",
            "range": "stddev: 0.0002490212915659603",
            "extra": "mean: 7.003665884614152 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 311.3296632089041,
            "unit": "iter/sec",
            "range": "stddev: 0.00019258994470826142",
            "extra": "mean: 3.2120292994021384 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4807.866346638554,
            "unit": "iter/sec",
            "range": "stddev: 0.00005972405563011837",
            "extra": "mean: 207.99247065159278 usec\nrounds: 1874"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 84.16235916408515,
            "unit": "iter/sec",
            "range": "stddev: 0.0008694308386599458",
            "extra": "mean: 11.881796208330778 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7921391956652363,
            "unit": "iter/sec",
            "range": "stddev: 0.022805455001177106",
            "extra": "mean: 1.2624043924000035 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5961922373200864,
            "unit": "iter/sec",
            "range": "stddev: 0.07576262215811999",
            "extra": "mean: 1.6773113392000027 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2389684.225573529,
            "unit": "iter/sec",
            "range": "stddev: 7.52290887981154e-8",
            "extra": "mean: 418.4653308159499 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5748392.82844893,
            "unit": "iter/sec",
            "range": "stddev: 4.0261548822347716e-8",
            "extra": "mean: 173.9616671726011 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.38606607869903,
            "unit": "iter/sec",
            "range": "stddev: 0.001139388544981999",
            "extra": "mean: 23.59265892105393 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.361732137786216,
            "unit": "iter/sec",
            "range": "stddev: 0.0017907657939799197",
            "extra": "mean: 106.81783940001424 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 66562.93445401105,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021486250210456",
            "extra": "mean: 15.023376120698364 usec\nrounds: 12270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5695820262049152,
            "unit": "iter/sec",
            "range": "stddev: 0.009605926997120661",
            "extra": "mean: 637.1122905999982 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 107.46654612872261,
            "unit": "iter/sec",
            "range": "stddev: 0.0008226656435971157",
            "extra": "mean: 9.305221355138814 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.111091278234575,
            "unit": "iter/sec",
            "range": "stddev: 0.001452020339746486",
            "extra": "mean: 70.86624133332862 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 58.69563261477211,
            "unit": "iter/sec",
            "range": "stddev: 0.000837147178815734",
            "extra": "mean: 17.037042714287516 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5011.088151376171,
            "unit": "iter/sec",
            "range": "stddev: 0.00005830243481617532",
            "extra": "mean: 199.5574553453774 usec\nrounds: 2161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 241.8122730654857,
            "unit": "iter/sec",
            "range": "stddev: 0.010571437377051105",
            "extra": "mean: 4.135439394050888 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 109.04462389527545,
            "unit": "iter/sec",
            "range": "stddev: 0.000813377389762736",
            "extra": "mean: 9.170557559631574 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 108.7939044445322,
            "unit": "iter/sec",
            "range": "stddev: 0.0007464871367608424",
            "extra": "mean: 9.191691438097461 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 100.97615452425094,
            "unit": "iter/sec",
            "range": "stddev: 0.000864678413869182",
            "extra": "mean: 9.903328213591605 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11835.741040222776,
            "unit": "iter/sec",
            "range": "stddev: 0.00000693562272125764",
            "extra": "mean: 84.48985125659506 usec\nrounds: 4975"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 276.7001357163847,
            "unit": "iter/sec",
            "range": "stddev: 0.00030450386067873067",
            "extra": "mean: 3.6140206343266548 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 25.982857394111146,
            "unit": "iter/sec",
            "range": "stddev: 0.03924062835745899",
            "extra": "mean: 38.486914076919184 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 49.65385772256659,
            "unit": "iter/sec",
            "range": "stddev: 0.0006418298916950303",
            "extra": "mean: 20.13942210869795 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10471.099239923336,
            "unit": "iter/sec",
            "range": "stddev: 0.000014882647287498724",
            "extra": "mean: 95.50095716668248 usec\nrounds: 4109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 601.848651034879,
            "unit": "iter/sec",
            "range": "stddev: 0.00008200870149566192",
            "extra": "mean: 1.6615472981130714 msec\nrounds: 530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 36.77475468171389,
            "unit": "iter/sec",
            "range": "stddev: 0.0019130157056624151",
            "extra": "mean: 27.192567527778678 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6794338210840898,
            "unit": "iter/sec",
            "range": "stddev: 0.12815839480765515",
            "extra": "mean: 1.4718136909999884 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.855897625184931,
            "unit": "iter/sec",
            "range": "stddev: 0.0019273386194934873",
            "extra": "mean: 205.93514879999475 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1044.6486191227302,
            "unit": "iter/sec",
            "range": "stddev: 0.0000552538826295796",
            "extra": "mean: 957.2596772681085 usec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15247955574335367,
            "unit": "iter/sec",
            "range": "stddev: 0.14238600678980756",
            "extra": "mean: 6.558256253600007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 84.81970698475887,
            "unit": "iter/sec",
            "range": "stddev: 0.00023536256858924757",
            "extra": "mean: 11.789712975307598 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.86550547366344,
            "unit": "iter/sec",
            "range": "stddev: 0.0009826458389460226",
            "extra": "mean: 45.7341359523785 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 95.97368481608339,
            "unit": "iter/sec",
            "range": "stddev: 0.00019095329488560305",
            "extra": "mean: 10.419522829787386 msec\nrounds: 94"
          }
        ]
      }
    ]
  }
}