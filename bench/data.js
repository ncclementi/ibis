window.BENCHMARK_DATA = {
  "lastUpdate": 1682982709664,
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
          "id": "2c0fa9e86621f49f6abbee57fd3be30641122187",
          "message": "ci(bigquery): fix median test",
          "timestamp": "2023-05-01T19:06:27-04:00",
          "tree_id": "c10a04832da38185bc8b630a3b9d7e0ae3dcd4ce",
          "url": "https://github.com/ibis-project/ibis/commit/2c0fa9e86621f49f6abbee57fd3be30641122187"
        },
        "date": 1682982622758,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 544.8793682085677,
            "unit": "iter/sec",
            "range": "stddev: 0.00004727044434773391",
            "extra": "mean: 1.8352686086972965 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12115431.529480282,
            "unit": "iter/sec",
            "range": "stddev: 3.6129223851648473e-9",
            "extra": "mean: 82.53936292456723 nsec\nrounds: 62112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 93.57147039969847,
            "unit": "iter/sec",
            "range": "stddev: 0.007611513698877596",
            "extra": "mean: 10.687018123455955 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.47116667000961,
            "unit": "iter/sec",
            "range": "stddev: 0.0001770081330383846",
            "extra": "mean: 18.02738359459543 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 101.4939186910999,
            "unit": "iter/sec",
            "range": "stddev: 0.0006553935259838716",
            "extra": "mean: 9.852807073530515 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.82366112371607,
            "unit": "iter/sec",
            "range": "stddev: 0.00066448052050444",
            "extra": "mean: 23.35157652941057 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 108.68573107957496,
            "unit": "iter/sec",
            "range": "stddev: 0.00007502308890255774",
            "extra": "mean: 9.200839798076561 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2411.3120826608747,
            "unit": "iter/sec",
            "range": "stddev: 0.0000815149735931872",
            "extra": "mean: 414.71197660010205 usec\nrounds: 1453"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 264.4115149574587,
            "unit": "iter/sec",
            "range": "stddev: 0.00027946758275863864",
            "extra": "mean: 3.7819835500011814 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1174.717233410653,
            "unit": "iter/sec",
            "range": "stddev: 0.00003082149843713935",
            "extra": "mean: 851.2686896544608 usec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5781418.489775228,
            "unit": "iter/sec",
            "range": "stddev: 9.756395041376476e-9",
            "extra": "mean: 172.96793196502492 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.08829804956655,
            "unit": "iter/sec",
            "range": "stddev: 0.0007365496766710385",
            "extra": "mean: 9.892341836734364 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 86.06406584422226,
            "unit": "iter/sec",
            "range": "stddev: 0.012472934772163886",
            "extra": "mean: 11.619251196080148 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 69.2338440394754,
            "unit": "iter/sec",
            "range": "stddev: 0.0001646787918753268",
            "extra": "mean: 14.443802938774066 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5075745678075814,
            "unit": "iter/sec",
            "range": "stddev: 0.005257909119369049",
            "extra": "mean: 398.7917300000049 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.018072360676953,
            "unit": "iter/sec",
            "range": "stddev: 0.00013321213268291453",
            "extra": "mean: 52.58156457894582 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 276.45367984042906,
            "unit": "iter/sec",
            "range": "stddev: 0.00023441200359636266",
            "extra": "mean: 3.617242499999301 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1822681.240055149,
            "unit": "iter/sec",
            "range": "stddev: 9.53349095109953e-8",
            "extra": "mean: 548.6422847967333 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 44.49793953773414,
            "unit": "iter/sec",
            "range": "stddev: 0.0005146104013612497",
            "extra": "mean: 22.472950666670815 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.03111345961376,
            "unit": "iter/sec",
            "range": "stddev: 0.0007161217126678938",
            "extra": "mean: 10.413291734043609 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 190.65006188007544,
            "unit": "iter/sec",
            "range": "stddev: 0.00005208951072339676",
            "extra": "mean: 5.245212039999387 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2307.540275701575,
            "unit": "iter/sec",
            "range": "stddev: 0.00008234640713223048",
            "extra": "mean: 433.3618834436007 usec\nrounds: 1510"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.49819721038481,
            "unit": "iter/sec",
            "range": "stddev: 0.0002154790206019459",
            "extra": "mean: 117.67201622221693 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2285.0850183565553,
            "unit": "iter/sec",
            "range": "stddev: 0.00006420441971361853",
            "extra": "mean: 437.62047887356294 usec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6912788012877469,
            "unit": "iter/sec",
            "range": "stddev: 0.001595397876744772",
            "extra": "mean: 591.2685710000005 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 271.1137142093471,
            "unit": "iter/sec",
            "range": "stddev: 0.00024547643367307435",
            "extra": "mean: 3.6884891747963193 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17923927550105015,
            "unit": "iter/sec",
            "range": "stddev: 0.045923696372474496",
            "extra": "mean: 5.579134356599991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13436.354125722095,
            "unit": "iter/sec",
            "range": "stddev: 0.000002715792834418084",
            "extra": "mean: 74.42495119160594 usec\nrounds: 6003"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 198.27072985051308,
            "unit": "iter/sec",
            "range": "stddev: 0.000026372666544946977",
            "extra": "mean: 5.043608810811125 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 101.60017126482619,
            "unit": "iter/sec",
            "range": "stddev: 0.0006476734208152344",
            "extra": "mean: 9.842503093754118 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4699.7677681307005,
            "unit": "iter/sec",
            "range": "stddev: 0.000024149415663085798",
            "extra": "mean: 212.7764709526792 usec\nrounds: 2100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3394916128038128,
            "unit": "iter/sec",
            "range": "stddev: 0.0007088006085847173",
            "extra": "mean: 746.5518935999967 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6439476.649767089,
            "unit": "iter/sec",
            "range": "stddev: 6.011716786990313e-8",
            "extra": "mean: 155.29212300756916 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 161.50801641273804,
            "unit": "iter/sec",
            "range": "stddev: 0.0001210548541661336",
            "extra": "mean: 6.191643128378676 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 249.3300218981522,
            "unit": "iter/sec",
            "range": "stddev: 0.00036187153644660566",
            "extra": "mean: 4.010748454546263 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4631442.222459973,
            "unit": "iter/sec",
            "range": "stddev: 1.382599127494731e-8",
            "extra": "mean: 215.9154647661113 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2361.1595267977723,
            "unit": "iter/sec",
            "range": "stddev: 0.00008896563122056621",
            "extra": "mean: 423.5207272742854 usec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8195.346518355485,
            "unit": "iter/sec",
            "range": "stddev: 0.000012530531197908848",
            "extra": "mean: 122.02046585342731 usec\nrounds: 4671"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8015940306510915,
            "unit": "iter/sec",
            "range": "stddev: 0.0022303374983061765",
            "extra": "mean: 1.2475142800000072 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 99.64651427331178,
            "unit": "iter/sec",
            "range": "stddev: 0.0006794144526659141",
            "extra": "mean: 10.035473968082686 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9189349619437778,
            "unit": "iter/sec",
            "range": "stddev: 0.0008352426302816442",
            "extra": "mean: 1.0882162954000023 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7328622.824123242,
            "unit": "iter/sec",
            "range": "stddev: 4.0527386073034375e-9",
            "extra": "mean: 136.45128477735113 nsec\nrounds: 64517"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9183993962662756,
            "unit": "iter/sec",
            "range": "stddev: 0.003237132060451174",
            "extra": "mean: 1.0888508900000033 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 134.1003150037215,
            "unit": "iter/sec",
            "range": "stddev: 0.00010363081456333178",
            "extra": "mean: 7.457104034187006 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.35754379886006,
            "unit": "iter/sec",
            "range": "stddev: 0.00004895531813574865",
            "extra": "mean: 9.402247967395406 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 84.89564740062322,
            "unit": "iter/sec",
            "range": "stddev: 0.013102147047475806",
            "extra": "mean: 11.779166902173351 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 414.92764380126573,
            "unit": "iter/sec",
            "range": "stddev: 0.000030580985489119334",
            "extra": "mean: 2.4100587534701865 msec\nrounds: 288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 158.2459011540641,
            "unit": "iter/sec",
            "range": "stddev: 0.00009567013351771515",
            "extra": "mean: 6.319279000006617 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 50.209034803888336,
            "unit": "iter/sec",
            "range": "stddev: 0.0001458258254821144",
            "extra": "mean: 19.916734187500396 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 98.94267232521325,
            "unit": "iter/sec",
            "range": "stddev: 0.0006444225287977114",
            "extra": "mean: 10.10686265591366 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.56375607646045,
            "unit": "iter/sec",
            "range": "stddev: 0.00007207647854922316",
            "extra": "mean: 9.563543215383037 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 276.91301900587007,
            "unit": "iter/sec",
            "range": "stddev: 0.00022712381608415614",
            "extra": "mean: 3.6112422723570163 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.838261111080755,
            "unit": "iter/sec",
            "range": "stddev: 0.00024490297864008826",
            "extra": "mean: 17.289593096159287 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 85.8151859306767,
            "unit": "iter/sec",
            "range": "stddev: 0.01435754191598946",
            "extra": "mean: 11.652949173912187 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2361.445204049226,
            "unit": "iter/sec",
            "range": "stddev: 0.00009615861987044651",
            "extra": "mean: 423.4694916000068 usec\nrounds: 1369"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 122.5682166426202,
            "unit": "iter/sec",
            "range": "stddev: 0.00008378178122595655",
            "extra": "mean: 8.158721954124228 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1614723.6757204316,
            "unit": "iter/sec",
            "range": "stddev: 9.369608298747865e-8",
            "extra": "mean: 619.301007990631 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.74637648763195,
            "unit": "iter/sec",
            "range": "stddev: 0.0007723112898042608",
            "extra": "mean: 22.859036114287587 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 263.6698897737351,
            "unit": "iter/sec",
            "range": "stddev: 0.00032100972937646903",
            "extra": "mean: 3.7926211478228966 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2343.067077798624,
            "unit": "iter/sec",
            "range": "stddev: 0.00008268833587198796",
            "extra": "mean: 426.79102509499114 usec\nrounds: 1833"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11901.326248619856,
            "unit": "iter/sec",
            "range": "stddev: 0.00001413101940247087",
            "extra": "mean: 84.02424898787775 usec\nrounds: 5928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 270.32758956004807,
            "unit": "iter/sec",
            "range": "stddev: 0.0002344623678740475",
            "extra": "mean: 3.699215465308136 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 85.51112154074107,
            "unit": "iter/sec",
            "range": "stddev: 0.016404385744162787",
            "extra": "mean: 11.69438526804444 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6390041.017312459,
            "unit": "iter/sec",
            "range": "stddev: 4.760157604844376e-9",
            "extra": "mean: 156.49351816223958 nsec\nrounds: 62112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9822.863620954202,
            "unit": "iter/sec",
            "range": "stddev: 0.000003992668318039733",
            "extra": "mean: 101.80330691620243 usec\nrounds: 4656"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 671.1726700471767,
            "unit": "iter/sec",
            "range": "stddev: 0.00013436069721890336",
            "extra": "mean: 1.4899295585586196 msec\nrounds: 555"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2428.044118452394,
            "unit": "iter/sec",
            "range": "stddev: 0.0000765941743901231",
            "extra": "mean: 411.85413082089633 usec\nrounds: 1353"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.05636164843385,
            "unit": "iter/sec",
            "range": "stddev: 0.000855243513330386",
            "extra": "mean: 9.994367010002634 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 117.25196304040577,
            "unit": "iter/sec",
            "range": "stddev: 0.00013048655162930205",
            "extra": "mean: 8.528641858690191 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 275.47388738438,
            "unit": "iter/sec",
            "range": "stddev: 0.00023454528443708764",
            "extra": "mean: 3.63010813654602 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 103.3861484816319,
            "unit": "iter/sec",
            "range": "stddev: 0.0007073278689523096",
            "extra": "mean: 9.672475613864897 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 428.8758034795813,
            "unit": "iter/sec",
            "range": "stddev: 0.00011398845690800041",
            "extra": "mean: 2.3316773571433482 msec\nrounds: 378"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1081670.7992776425,
            "unit": "iter/sec",
            "range": "stddev: 1.2937622804367727e-7",
            "extra": "mean: 924.4956974597229 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2555094.1350023984,
            "unit": "iter/sec",
            "range": "stddev: 1.5528690046488255e-8",
            "extra": "mean: 391.37501288142363 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 255.95952006126208,
            "unit": "iter/sec",
            "range": "stddev: 0.004068285897069871",
            "extra": "mean: 3.9068677725315983 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1874505.0965280992,
            "unit": "iter/sec",
            "range": "stddev: 8.787859111428997e-8",
            "extra": "mean: 533.474143042966 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.38776004375796,
            "unit": "iter/sec",
            "range": "stddev: 0.00005628376075993073",
            "extra": "mean: 9.863123512822552 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.00221813325166,
            "unit": "iter/sec",
            "range": "stddev: 0.000734172678253719",
            "extra": "mean: 10.416425989366141 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 179.80702887335627,
            "unit": "iter/sec",
            "range": "stddev: 0.003911629061573167",
            "extra": "mean: 5.561517846470459 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1726.1630002408256,
            "unit": "iter/sec",
            "range": "stddev: 0.000011197239967188278",
            "extra": "mean: 579.3195659161303 usec\nrounds: 1244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 754.4228093898755,
            "unit": "iter/sec",
            "range": "stddev: 0.000013020319178385167",
            "extra": "mean: 1.3255166566460657 msec\nrounds: 632"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 103.67532573741599,
            "unit": "iter/sec",
            "range": "stddev: 0.0006432697387470535",
            "extra": "mean: 9.64549658163364 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.77682229694716,
            "unit": "iter/sec",
            "range": "stddev: 0.0007799342932198075",
            "extra": "mean: 10.022367690002056 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.72527254998695,
            "unit": "iter/sec",
            "range": "stddev: 0.0004075134709982038",
            "extra": "mean: 36.06817564000721 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141612.21975958953,
            "unit": "iter/sec",
            "range": "stddev: 3.420359346128335e-7",
            "extra": "mean: 7.061537497948041 usec\nrounds: 41842"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.27841224115967,
            "unit": "iter/sec",
            "range": "stddev: 0.00011777774124085915",
            "extra": "mean: 33.026830866667 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 172.15171815357894,
            "unit": "iter/sec",
            "range": "stddev: 0.00004560651440765255",
            "extra": "mean: 5.808829622646496 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2341.939946000427,
            "unit": "iter/sec",
            "range": "stddev: 0.00007825242453267572",
            "extra": "mean: 426.9964316155089 usec\nrounds: 1455"
          }
        ]
      }
    ]
  }
}