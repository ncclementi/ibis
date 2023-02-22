window.BENCHMARK_DATA = {
  "lastUpdate": 1677085644241,
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
          "id": "6850146479f3e90a27a1200c85c35cf35efb2d2e",
          "message": "feat(ux): easy interactive setup",
          "timestamp": "2023-02-22T12:00:43-05:00",
          "tree_id": "d573558f7357c77366628073fe77ff97f8539935",
          "url": "https://github.com/ibis-project/ibis/commit/6850146479f3e90a27a1200c85c35cf35efb2d2e"
        },
        "date": 1677085551967,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3021.7197222718746,
            "unit": "iter/sec",
            "range": "stddev: 0.00010428772806000872",
            "extra": "mean: 330.93737735813295 usec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 214.61013269605542,
            "unit": "iter/sec",
            "range": "stddev: 0.0011558177980795289",
            "extra": "mean: 4.659612234694733 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.919489328353645,
            "unit": "iter/sec",
            "range": "stddev: 0.0041906685083158875",
            "extra": "mean: 50.20209020000266 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 36.97029179210248,
            "unit": "iter/sec",
            "range": "stddev: 0.0025076339009253183",
            "extra": "mean: 27.048745128206374 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 183.4244028071111,
            "unit": "iter/sec",
            "range": "stddev: 0.005902651463824011",
            "extra": "mean: 5.451837294798767 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 72.37605730863042,
            "unit": "iter/sec",
            "range": "stddev: 0.0004286229155281904",
            "extra": "mean: 13.81672388889241 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 2970.4462236745576,
            "unit": "iter/sec",
            "range": "stddev: 0.00024176335533799672",
            "extra": "mean: 336.6497572081817 usec\nrounds: 1318"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 169.56234359476477,
            "unit": "iter/sec",
            "range": "stddev: 0.000840412161036175",
            "extra": "mean: 5.897535849055551 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 48.391170732058576,
            "unit": "iter/sec",
            "range": "stddev: 0.018042145834463754",
            "extra": "mean: 20.664926780486255 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 465.2199193387177,
            "unit": "iter/sec",
            "range": "stddev: 0.01148631116755729",
            "extra": "mean: 2.149521029584116 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 10.913790019071033,
            "unit": "iter/sec",
            "range": "stddev: 0.0022663547012418367",
            "extra": "mean: 91.62719809090834 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4106475.449464265,
            "unit": "iter/sec",
            "range": "stddev: 3.718749342096859e-7",
            "extra": "mean: 243.517832337329 nsec\nrounds: 50506"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 88.83381661105324,
            "unit": "iter/sec",
            "range": "stddev: 0.00090299435887121",
            "extra": "mean: 11.25697440624851 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 8761.953178473821,
            "unit": "iter/sec",
            "range": "stddev: 0.00004999445715237772",
            "extra": "mean: 114.12980412367172 usec\nrounds: 4171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 40.85809205850991,
            "unit": "iter/sec",
            "range": "stddev: 0.0025139258905575042",
            "extra": "mean: 24.47495586842314 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 68.79911223783279,
            "unit": "iter/sec",
            "range": "stddev: 0.00211476054941526",
            "extra": "mean: 14.535071274511267 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 6.875366195969056,
            "unit": "iter/sec",
            "range": "stddev: 0.008362079887260789",
            "extra": "mean: 145.44679825000273 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3014.7530535244964,
            "unit": "iter/sec",
            "range": "stddev: 0.00027517904443044393",
            "extra": "mean: 331.7021269224413 usec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 181.76220942560727,
            "unit": "iter/sec",
            "range": "stddev: 0.0005329678188052616",
            "extra": "mean: 5.5016936862735815 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.540030479417463,
            "unit": "iter/sec",
            "range": "stddev: 0.03869956213678294",
            "extra": "mean: 1.851747333000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1670935.5266289075,
            "unit": "iter/sec",
            "range": "stddev: 0.00000153305051169252",
            "extra": "mean: 598.4671365612102 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 102.01563150665878,
            "unit": "iter/sec",
            "range": "stddev: 0.0011800221483685845",
            "extra": "mean: 9.802419347222566 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 113114.517151039,
            "unit": "iter/sec",
            "range": "stddev: 0.000008341522464153689",
            "extra": "mean: 8.840598229002955 usec\nrounds: 36364"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 70.4311287246444,
            "unit": "iter/sec",
            "range": "stddev: 0.002608428534055363",
            "extra": "mean: 14.198267415386349 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.42708582980065,
            "unit": "iter/sec",
            "range": "stddev: 0.0009863628896110506",
            "extra": "mean: 15.52142219565442 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 364.56941200780534,
            "unit": "iter/sec",
            "range": "stddev: 0.000651521383198429",
            "extra": "mean: 2.742961880681834 msec\nrounds: 352"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 76.3887827800832,
            "unit": "iter/sec",
            "range": "stddev: 0.0011965911100475727",
            "extra": "mean: 13.090927275002073 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 66.81628953116234,
            "unit": "iter/sec",
            "range": "stddev: 0.0022570977199476215",
            "extra": "mean: 14.966410242424665 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3711009.827188926,
            "unit": "iter/sec",
            "range": "stddev: 4.108906237604724e-7",
            "extra": "mean: 269.4684321971109 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 87.28369202695185,
            "unit": "iter/sec",
            "range": "stddev: 0.0012894186213717118",
            "extra": "mean: 11.456893914286022 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2654.88755902207,
            "unit": "iter/sec",
            "range": "stddev: 0.00013162180497410076",
            "extra": "mean: 376.66378623144055 usec\nrounds: 1932"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 50.221554003742526,
            "unit": "iter/sec",
            "range": "stddev: 0.001495040267438362",
            "extra": "mean: 19.911769355553588 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 455.47712924024796,
            "unit": "iter/sec",
            "range": "stddev: 0.0003294168124793011",
            "extra": "mean: 2.1954999182242925 msec\nrounds: 428"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7943.329845103981,
            "unit": "iter/sec",
            "range": "stddev: 0.000059104002792547615",
            "extra": "mean: 125.89178839354993 usec\nrounds: 1413"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 55.71645594699106,
            "unit": "iter/sec",
            "range": "stddev: 0.0014422385908719197",
            "extra": "mean: 17.94801882143052 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 74.82639338770245,
            "unit": "iter/sec",
            "range": "stddev: 0.0008577445338384375",
            "extra": "mean: 13.364268338026669 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 181.53080331504808,
            "unit": "iter/sec",
            "range": "stddev: 0.000913216765119452",
            "extra": "mean: 5.50870696178484 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3032.505135429548,
            "unit": "iter/sec",
            "range": "stddev: 0.0001107788850837265",
            "extra": "mean: 329.7603648932822 usec\nrounds: 1880"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 128.3927345280803,
            "unit": "iter/sec",
            "range": "stddev: 0.000494639823081664",
            "extra": "mean: 7.788602709301231 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 55.077908484987624,
            "unit": "iter/sec",
            "range": "stddev: 0.002117664830885797",
            "extra": "mean: 18.156099741379364 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.541948799769759,
            "unit": "iter/sec",
            "range": "stddev: 0.02023736347945962",
            "extra": "mean: 1.8451927569999953 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 557.9028554525702,
            "unit": "iter/sec",
            "range": "stddev: 0.0002623634550446406",
            "extra": "mean: 1.7924267463890307 msec\nrounds: 623"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9523496693243687,
            "unit": "iter/sec",
            "range": "stddev: 0.0270077011319223",
            "extra": "mean: 512.2033290000047 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5047714.517949227,
            "unit": "iter/sec",
            "range": "stddev: 1.3365496059884613e-7",
            "extra": "mean: 198.1094605180522 nsec\nrounds: 54645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2864.7153064382605,
            "unit": "iter/sec",
            "range": "stddev: 0.0000867436114950251",
            "extra": "mean: 349.0748270002835 usec\nrounds: 1237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 29.962801282081593,
            "unit": "iter/sec",
            "range": "stddev: 0.001736558463586619",
            "extra": "mean: 33.374716555558564 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 6999.856916625718,
            "unit": "iter/sec",
            "range": "stddev: 0.00007626330752599021",
            "extra": "mean: 142.86006298569458 usec\nrounds: 3858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 532991.5964003785,
            "unit": "iter/sec",
            "range": "stddev: 0.000002324847331650582",
            "extra": "mean: 1.8762021892157734 usec\nrounds: 13794"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 184.74142923099487,
            "unit": "iter/sec",
            "range": "stddev: 0.0005989700804192678",
            "extra": "mean: 5.412971005813923 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 203.4183690860615,
            "unit": "iter/sec",
            "range": "stddev: 0.00048006004182650394",
            "extra": "mean: 4.91597688297719 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 53.715191413187014,
            "unit": "iter/sec",
            "range": "stddev: 0.0019827554258997",
            "extra": "mean: 18.616707372553478 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 27.393867149496234,
            "unit": "iter/sec",
            "range": "stddev: 0.0024060680284245357",
            "extra": "mean: 36.50452105001136 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.379588560044258,
            "unit": "iter/sec",
            "range": "stddev: 0.0012141886382800694",
            "extra": "mean: 31.867849321431308 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 296541.91678958724,
            "unit": "iter/sec",
            "range": "stddev: 0.000005517830208319185",
            "extra": "mean: 3.3722045464134327 usec\nrounds: 1452"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 68.48070227983186,
            "unit": "iter/sec",
            "range": "stddev: 0.00146961167343138",
            "extra": "mean: 14.602653984383984 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.46215251216265557,
            "unit": "iter/sec",
            "range": "stddev: 0.05131354555673723",
            "extra": "mean: 2.163787870199974 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 219.3360912127578,
            "unit": "iter/sec",
            "range": "stddev: 0.0005385352039267026",
            "extra": "mean: 4.5592131895429455 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 52.66030054046522,
            "unit": "iter/sec",
            "range": "stddev: 0.0028610016598544976",
            "extra": "mean: 18.989637160000257 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.08077472346732713,
            "unit": "iter/sec",
            "range": "stddev: 0.1509809977928253",
            "extra": "mean: 12.380110473599995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.1519951780615327,
            "unit": "iter/sec",
            "range": "stddev: 0.029051818952060583",
            "extra": "mean: 868.059188999996 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 71.27241571346654,
            "unit": "iter/sec",
            "range": "stddev: 0.0010051776658833648",
            "extra": "mean: 14.030673578123931 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 178.96758278663137,
            "unit": "iter/sec",
            "range": "stddev: 0.000529984164176505",
            "extra": "mean: 5.5876041036561315 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 127.78013985578998,
            "unit": "iter/sec",
            "range": "stddev: 0.00045451172759380205",
            "extra": "mean: 7.825942287499287 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 74.37585271917132,
            "unit": "iter/sec",
            "range": "stddev: 0.001115112327299953",
            "extra": "mean: 13.445223999996402 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 68.93062713859696,
            "unit": "iter/sec",
            "range": "stddev: 0.0013283870562786335",
            "extra": "mean: 14.5073393571384 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10860883.748151382,
            "unit": "iter/sec",
            "range": "stddev: 5.683941287355902e-8",
            "extra": "mean: 92.07353869061085 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3024.5829129715285,
            "unit": "iter/sec",
            "range": "stddev: 0.00008578405529901248",
            "extra": "mean: 330.6240988505556 usec\nrounds: 1305"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.854988554724004,
            "unit": "iter/sec",
            "range": "stddev: 0.005219383628654547",
            "extra": "mean: 259.4041424000011 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 80.17759703202452,
            "unit": "iter/sec",
            "range": "stddev: 0.0015608381600049298",
            "extra": "mean: 12.47231193023383 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 4957.02446877944,
            "unit": "iter/sec",
            "range": "stddev: 0.00006680593182976212",
            "extra": "mean: 201.73392451424155 usec\nrounds: 4067"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 48665.17957605355,
            "unit": "iter/sec",
            "range": "stddev: 0.000017969047340692486",
            "extra": "mean: 20.548573101167907 usec\nrounds: 3844"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1172.1981301796075,
            "unit": "iter/sec",
            "range": "stddev: 0.00019685473370740448",
            "extra": "mean: 853.0981019793788 usec\nrounds: 1010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 55.232310288877734,
            "unit": "iter/sec",
            "range": "stddev: 0.0012884630612112718",
            "extra": "mean: 18.105344403842047 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1416771.4414155015,
            "unit": "iter/sec",
            "range": "stddev: 0.000002148096570711904",
            "extra": "mean: 705.8301506987578 nsec\nrounds: 90910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 51.765215470304646,
            "unit": "iter/sec",
            "range": "stddev: 0.0016239714136590253",
            "extra": "mean: 19.317991645831256 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1281725.941150158,
            "unit": "iter/sec",
            "range": "stddev: 0.000002257686119660303",
            "extra": "mean: 780.1979876467578 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2418.6402101901017,
            "unit": "iter/sec",
            "range": "stddev: 0.00012846773287787178",
            "extra": "mean: 413.45545971941044 usec\nrounds: 1353"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 52.27664612022782,
            "unit": "iter/sec",
            "range": "stddev: 0.0019080109080982142",
            "extra": "mean: 19.12900069564834 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 207.52760889743536,
            "unit": "iter/sec",
            "range": "stddev: 0.0005826050322427674",
            "extra": "mean: 4.8186359651752255 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 73.38872695007254,
            "unit": "iter/sec",
            "range": "stddev: 0.0011428326019265556",
            "extra": "mean: 13.626070945205456 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1332749.6863067725,
            "unit": "iter/sec",
            "range": "stddev: 0.000003146593448220435",
            "extra": "mean: 750.3284452244994 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5189007454508167,
            "unit": "iter/sec",
            "range": "stddev: 0.04045691139498687",
            "extra": "mean: 1.927150825600006 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}