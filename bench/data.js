window.BENCHMARK_DATA = {
  "lastUpdate": 1682124578637,
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
          "id": "8b28b73afd7258dc92ac2624c3a8efc6f65c994c",
          "message": "chore(flake/nixpkgs): `4df48038` -> `d67390c8`",
          "timestamp": "2023-04-22T00:43:32Z",
          "tree_id": "44a9d05ae955c4f0548dc9b4a6ae6d169425c4b9",
          "url": "https://github.com/ibis-project/ibis/commit/8b28b73afd7258dc92ac2624c3a8efc6f65c994c"
        },
        "date": 1682124487923,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 2881008.134762749,
            "unit": "iter/sec",
            "range": "stddev: 0.000002381694324884909",
            "extra": "mean: 347.1007207282148 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1030747122383303,
            "unit": "iter/sec",
            "range": "stddev: 0.1932574810862192",
            "extra": "mean: 9.701700623600004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69369.23893363407,
            "unit": "iter/sec",
            "range": "stddev: 0.000008157650318261605",
            "extra": "mean: 14.415611521364758 usec\nrounds: 15849"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 770646.1926757232,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021888552098857834",
            "extra": "mean: 1.2976123278153735 usec\nrounds: 27856"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146530.58313856187,
            "unit": "iter/sec",
            "range": "stddev: 0.000017832733933679484",
            "extra": "mean: 6.824513890416874 usec\nrounds: 32468"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1961445.4331666573,
            "unit": "iter/sec",
            "range": "stddev: 9.831983538843676e-7",
            "extra": "mean: 509.8281007927654 nsec\nrounds: 87720"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 80.13406758827547,
            "unit": "iter/sec",
            "range": "stddev: 0.00769215069400823",
            "extra": "mean: 12.479086986298338 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 81.53607906680176,
            "unit": "iter/sec",
            "range": "stddev: 0.011976523317584071",
            "extra": "mean: 12.264509299996007 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 48.87464409148298,
            "unit": "iter/sec",
            "range": "stddev: 0.001425320425820626",
            "extra": "mean: 20.46050704999942 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 33.257880137277375,
            "unit": "iter/sec",
            "range": "stddev: 0.0012234033196061392",
            "extra": "mean: 30.068061941180115 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1637.2504020994588,
            "unit": "iter/sec",
            "range": "stddev: 0.00015345420690199692",
            "extra": "mean: 610.7801217930331 usec\nrounds: 312"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.47544360760182,
            "unit": "iter/sec",
            "range": "stddev: 0.0014182669010502533",
            "extra": "mean: 16.535637282606046 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1640.3770399375655,
            "unit": "iter/sec",
            "range": "stddev: 0.00020868026411722756",
            "extra": "mean: 609.61594539147 usec\nrounds: 293"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 181.96480291211472,
            "unit": "iter/sec",
            "range": "stddev: 0.0007854335522615462",
            "extra": "mean: 5.495568285713911 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 200.08914426126842,
            "unit": "iter/sec",
            "range": "stddev: 0.0006690362818819533",
            "extra": "mean: 4.99777238636315 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 60.52354146467523,
            "unit": "iter/sec",
            "range": "stddev: 0.02134027032993293",
            "extra": "mean: 16.522496466662535 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 81.87003070409585,
            "unit": "iter/sec",
            "range": "stddev: 0.001064690597822399",
            "extra": "mean: 12.214481799992427 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8933.591695082443,
            "unit": "iter/sec",
            "range": "stddev: 0.000029893275276811284",
            "extra": "mean: 111.93706116549484 usec\nrounds: 4169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 416.28947371289627,
            "unit": "iter/sec",
            "range": "stddev: 0.00040511135464577774",
            "extra": "mean: 2.4021745999988298 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.35458764355584,
            "unit": "iter/sec",
            "range": "stddev: 0.0022378113124709967",
            "extra": "mean: 28.284872392855423 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.424874462321283,
            "unit": "iter/sec",
            "range": "stddev: 0.005413864323238511",
            "extra": "mean: 106.10220900000262 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 137.01059515475228,
            "unit": "iter/sec",
            "range": "stddev: 0.004218204949613705",
            "extra": "mean: 7.2987056137557005 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 72.20697291178227,
            "unit": "iter/sec",
            "range": "stddev: 0.0017286826652736424",
            "extra": "mean: 13.849078000011636 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1628.8731154171644,
            "unit": "iter/sec",
            "range": "stddev: 0.00027691274066215594",
            "extra": "mean: 613.9213610532788 usec\nrounds: 1443"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 89.23463358672173,
            "unit": "iter/sec",
            "range": "stddev: 0.0012374402253300027",
            "extra": "mean: 11.206411230771298 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 198.25893225319354,
            "unit": "iter/sec",
            "range": "stddev: 0.0009129310416724212",
            "extra": "mean: 5.043908935830012 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 89.62851368897702,
            "unit": "iter/sec",
            "range": "stddev: 0.0010190758209049646",
            "extra": "mean: 11.157163706520164 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5992212.77433256,
            "unit": "iter/sec",
            "range": "stddev: 2.0328413347149971e-7",
            "extra": "mean: 166.88325960041746 nsec\nrounds: 71429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1585.8229274971877,
            "unit": "iter/sec",
            "range": "stddev: 0.00013481390193115667",
            "extra": "mean: 630.5874272976 usec\nrounds: 1121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 259.8726033152551,
            "unit": "iter/sec",
            "range": "stddev: 0.0011877283302217313",
            "extra": "mean: 3.8480393363623864 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 82.88617309497447,
            "unit": "iter/sec",
            "range": "stddev: 0.0019739546482788707",
            "extra": "mean: 12.064738455884045 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 66.64836307384522,
            "unit": "iter/sec",
            "range": "stddev: 0.0019267425277100848",
            "extra": "mean: 15.004119439392946 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1702.4372389235389,
            "unit": "iter/sec",
            "range": "stddev: 0.0002824099024267553",
            "extra": "mean: 587.3931661835041 usec\nrounds: 1721"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 66.45420856382319,
            "unit": "iter/sec",
            "range": "stddev: 0.01925456227437769",
            "extra": "mean: 15.047955902440574 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 76.07673091295356,
            "unit": "iter/sec",
            "range": "stddev: 0.0031431992612992723",
            "extra": "mean: 13.144623697674296 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 92.79865681241557,
            "unit": "iter/sec",
            "range": "stddev: 0.0013225680971989688",
            "extra": "mean: 10.776018041095286 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.032144543792732,
            "unit": "iter/sec",
            "range": "stddev: 0.031188196754056815",
            "extra": "mean: 34.444579128199706 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 72.97709301271003,
            "unit": "iter/sec",
            "range": "stddev: 0.0022647235583558812",
            "extra": "mean: 13.702930038962164 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9440884.466134911,
            "unit": "iter/sec",
            "range": "stddev: 9.35522619924766e-8",
            "extra": "mean: 105.92227916649308 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1289290.1522588397,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017391446004993698",
            "extra": "mean: 775.6205988605416 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5556338425736002,
            "unit": "iter/sec",
            "range": "stddev: 0.07189808174680935",
            "extra": "mean: 1.7997463857999947 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 97.4202299190993,
            "unit": "iter/sec",
            "range": "stddev: 0.0009728813807389491",
            "extra": "mean: 10.264808457446982 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 140.07504719704292,
            "unit": "iter/sec",
            "range": "stddev: 0.0007134278783476187",
            "extra": "mean: 7.139030255640783 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 193.09839628909495,
            "unit": "iter/sec",
            "range": "stddev: 0.001154367712467668",
            "extra": "mean: 5.178706914286653 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 555.8593073092741,
            "unit": "iter/sec",
            "range": "stddev: 0.00025318669071928415",
            "extra": "mean: 1.799016382114136 msec\nrounds: 615"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.0112301476087358,
            "unit": "iter/sec",
            "range": "stddev: 0.018286792807052907",
            "extra": "mean: 497.2081396000135 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1576803.10857532,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012056492696368759",
            "extra": "mean: 634.1945893952001 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 61.39095772388373,
            "unit": "iter/sec",
            "range": "stddev: 0.024064032924595066",
            "extra": "mean: 16.28904381159307 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 129.5738500070174,
            "unit": "iter/sec",
            "range": "stddev: 0.0006753518604184194",
            "extra": "mean: 7.717606599987903 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 651.3221185807944,
            "unit": "iter/sec",
            "range": "stddev: 0.0004961775996703148",
            "extra": "mean: 1.5353386158280042 msec\nrounds: 518"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 91.79841543812763,
            "unit": "iter/sec",
            "range": "stddev: 0.0012176429094318158",
            "extra": "mean: 10.89343421917781 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1594516.8194877123,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013255474282300731",
            "extra": "mean: 627.1492327821796 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.35514623732539,
            "unit": "iter/sec",
            "range": "stddev: 0.0026339476369626686",
            "extra": "mean: 26.770073222221693 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5298930.409972792,
            "unit": "iter/sec",
            "range": "stddev: 1.510768989654329e-7",
            "extra": "mean: 188.7173302214818 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 139.00350113678152,
            "unit": "iter/sec",
            "range": "stddev: 0.000852513520816703",
            "extra": "mean: 7.1940634000001555 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1911.8360206499722,
            "unit": "iter/sec",
            "range": "stddev: 0.00015485932521760805",
            "extra": "mean: 523.0574114091789 usec\nrounds: 1157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1876.840426510353,
            "unit": "iter/sec",
            "range": "stddev: 0.0001621358106566779",
            "extra": "mean: 532.810347579373 usec\nrounds: 1591"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 536936.9062844451,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029360242624287436",
            "extra": "mean: 1.8624162137035984 usec\nrounds: 2393"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.272290588868474,
            "unit": "iter/sec",
            "range": "stddev: 0.011283598673641988",
            "extra": "mean: 189.6708808333377 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1906.8457433729045,
            "unit": "iter/sec",
            "range": "stddev: 0.00014006496115062637",
            "extra": "mean: 524.4262696526046 usec\nrounds: 1183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3852.762469235961,
            "unit": "iter/sec",
            "range": "stddev: 0.00006995420508005442",
            "extra": "mean: 259.554023375417 usec\nrounds: 1754"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.930026676151,
            "unit": "iter/sec",
            "range": "stddev: 0.0015110668852318923",
            "extra": "mean: 14.721030580002434 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1792.4386503377473,
            "unit": "iter/sec",
            "range": "stddev: 0.00032764503502598065",
            "extra": "mean: 557.8991503065229 usec\nrounds: 1304"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 66.5922737470791,
            "unit": "iter/sec",
            "range": "stddev: 0.024332664907438965",
            "extra": "mean: 15.016757106057852 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 116.37963463954074,
            "unit": "iter/sec",
            "range": "stddev: 0.0009196040020820685",
            "extra": "mean: 8.592568649122082 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1058.041635683684,
            "unit": "iter/sec",
            "range": "stddev: 0.00018197015141839027",
            "extra": "mean: 945.1423897452024 usec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 223.1142367896227,
            "unit": "iter/sec",
            "range": "stddev: 0.0006753065351877548",
            "extra": "mean: 4.482008922375102 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 228.89385900509876,
            "unit": "iter/sec",
            "range": "stddev: 0.0006791871899221626",
            "extra": "mean: 4.368837173467918 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 86.6197948901567,
            "unit": "iter/sec",
            "range": "stddev: 0.0014033928143607757",
            "extra": "mean: 11.544705240506614 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 102.88122132826342,
            "unit": "iter/sec",
            "range": "stddev: 0.0009919517575993511",
            "extra": "mean: 9.719946819150765 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 203.55691920833502,
            "unit": "iter/sec",
            "range": "stddev: 0.003716107644987223",
            "extra": "mean: 4.912630844921203 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.277919982794735,
            "unit": "iter/sec",
            "range": "stddev: 0.003903873725715795",
            "extra": "mean: 70.03821293332825 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 83.95509458034054,
            "unit": "iter/sec",
            "range": "stddev: 0.0015473828957207995",
            "extra": "mean: 11.91112945555738 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6249205426028465,
            "unit": "iter/sec",
            "range": "stddev: 0.05173296966999879",
            "extra": "mean: 1.6002034368000069 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5831912594668134,
            "unit": "iter/sec",
            "range": "stddev: 0.015585294354547754",
            "extra": "mean: 1.7147033392000026 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6253.522013397949,
            "unit": "iter/sec",
            "range": "stddev: 0.00010379092736089181",
            "extra": "mean: 159.90988723754955 usec\nrounds: 3095"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 169.85412200314366,
            "unit": "iter/sec",
            "range": "stddev: 0.0005921671833321626",
            "extra": "mean: 5.887404957893763 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10140.43360992614,
            "unit": "iter/sec",
            "range": "stddev: 0.00003178842635672158",
            "extra": "mean: 98.61511237755481 usec\nrounds: 5090"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 46.73099471591852,
            "unit": "iter/sec",
            "range": "stddev: 0.002466161023870508",
            "extra": "mean: 21.39907369999463 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10948.85628741703,
            "unit": "iter/sec",
            "range": "stddev: 0.00008486533752947318",
            "extra": "mean: 91.33374059802482 usec\nrounds: 5185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 246.67322923464505,
            "unit": "iter/sec",
            "range": "stddev: 0.000537444217600102",
            "extra": "mean: 4.053946198793877 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 223.76982323917224,
            "unit": "iter/sec",
            "range": "stddev: 0.0007249983834436084",
            "extra": "mean: 4.468877820630749 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 96.35034859946934,
            "unit": "iter/sec",
            "range": "stddev: 0.0009540031488792927",
            "extra": "mean: 10.378789641509481 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0970742210099886,
            "unit": "iter/sec",
            "range": "stddev: 0.06759106906289677",
            "extra": "mean: 911.5153567999982 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 216.57688245124191,
            "unit": "iter/sec",
            "range": "stddev: 0.0008082472137486372",
            "extra": "mean: 4.617297971426524 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 73.6512404839434,
            "unit": "iter/sec",
            "range": "stddev: 0.001984568388749858",
            "extra": "mean: 13.57750383332659 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 17.613118415235306,
            "unit": "iter/sec",
            "range": "stddev: 0.005598488800861251",
            "extra": "mean: 56.77586310525241 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5559579199693401,
            "unit": "iter/sec",
            "range": "stddev: 0.05211672797442002",
            "extra": "mean: 1.7986972828000147 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}