window.BENCHMARK_DATA = {
  "lastUpdate": 1677716799496,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "e20c2ad17053fd80373f4dd3ed997be7cf4e0334",
          "message": "chore(deps): update clickhouse/clickhouse-server docker tag to v23.2.2.20",
          "timestamp": "2023-03-01T19:15:27-05:00",
          "tree_id": "a50fc0623467f0a53207c697656e19c45a74688e",
          "url": "https://github.com/ibis-project/ibis/commit/e20c2ad17053fd80373f4dd3ed997be7cf4e0334"
        },
        "date": 1677716706896,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.473241795250818,
            "unit": "iter/sec",
            "range": "stddev: 0.013309735047857138",
            "extra": "mean: 32.81567503447722 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 101.71388144519689,
            "unit": "iter/sec",
            "range": "stddev: 0.0011907208406533747",
            "extra": "mean: 9.831499750000168 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 72.66440766551143,
            "unit": "iter/sec",
            "range": "stddev: 0.001887484609185309",
            "extra": "mean: 13.761895708325275 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 104.43399746379822,
            "unit": "iter/sec",
            "range": "stddev: 0.0015297687834975485",
            "extra": "mean: 9.575425860210393 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 152.89752624099222,
            "unit": "iter/sec",
            "range": "stddev: 0.0007205908863734667",
            "extra": "mean: 6.540328183098475 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 81.54705765575132,
            "unit": "iter/sec",
            "range": "stddev: 0.0014673750053620389",
            "extra": "mean: 12.262858142858727 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 567.1228075088147,
            "unit": "iter/sec",
            "range": "stddev: 0.0003390777496932069",
            "extra": "mean: 1.7632865170643963 msec\nrounds: 586"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 56.35101271223372,
            "unit": "iter/sec",
            "range": "stddev: 0.0011931752461562363",
            "extra": "mean: 17.74590999999724 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 129.3836292013264,
            "unit": "iter/sec",
            "range": "stddev: 0.00449967935201431",
            "extra": "mean: 7.728953084504668 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5515236183058532,
            "unit": "iter/sec",
            "range": "stddev: 0.02162217881666947",
            "extra": "mean: 1.8131589778000035 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3734.8519628820186,
            "unit": "iter/sec",
            "range": "stddev: 0.00013376825322384316",
            "extra": "mean: 267.74822936444974 usec\nrounds: 1369"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3813.785378079875,
            "unit": "iter/sec",
            "range": "stddev: 0.0001299308167491079",
            "extra": "mean: 262.2066794181978 usec\nrounds: 2745"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1675091.0614344964,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014047072595863182",
            "extra": "mean: 596.9824703999261 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 77.58813542687305,
            "unit": "iter/sec",
            "range": "stddev: 0.0021642985183480267",
            "extra": "mean: 12.888568522728601 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.21900904406754,
            "unit": "iter/sec",
            "range": "stddev: 0.0018992402594211772",
            "extra": "mean: 19.150114456521024 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5330278.282330644,
            "unit": "iter/sec",
            "range": "stddev: 2.6772354223661225e-7",
            "extra": "mean: 187.60746569548613 nsec\nrounds: 54946"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 17.61876059370095,
            "unit": "iter/sec",
            "range": "stddev: 0.003935738370419022",
            "extra": "mean: 56.75768137501791 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 157.55337358982356,
            "unit": "iter/sec",
            "range": "stddev: 0.0046356056782894456",
            "extra": "mean: 6.347055459462345 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 526.3633228362446,
            "unit": "iter/sec",
            "range": "stddev: 0.00034629773643302765",
            "extra": "mean: 1.8998284200571234 msec\nrounds: 369"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 36.92649360486265,
            "unit": "iter/sec",
            "range": "stddev: 0.004278251938020576",
            "extra": "mean: 27.080827405402918 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 209.93978329787276,
            "unit": "iter/sec",
            "range": "stddev: 0.0006153829910062827",
            "extra": "mean: 4.763270611655112 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9183.080699101783,
            "unit": "iter/sec",
            "range": "stddev: 0.00011106117679168397",
            "extra": "mean: 108.8959176954431 usec\nrounds: 4131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3906946.684590027,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020909219207638916",
            "extra": "mean: 255.95435022036145 nsec\nrounds: 47170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 23.76499415173315,
            "unit": "iter/sec",
            "range": "stddev: 0.03641243387474168",
            "extra": "mean: 42.078697499997965 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3377.933950306829,
            "unit": "iter/sec",
            "range": "stddev: 0.0002316264043599174",
            "extra": "mean: 296.0389441330452 usec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 198.25196681081647,
            "unit": "iter/sec",
            "range": "stddev: 0.0011800985861458674",
            "extra": "mean: 5.044086149996474 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 885.2270651723613,
            "unit": "iter/sec",
            "range": "stddev: 0.00008336736268604437",
            "extra": "mean: 1.129653666661549 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 255.59036202055174,
            "unit": "iter/sec",
            "range": "stddev: 0.0006244672700650712",
            "extra": "mean: 3.912510597405043 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 375.32452390263654,
            "unit": "iter/sec",
            "range": "stddev: 0.0006223713687550117",
            "extra": "mean: 2.664360936508938 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 103.78137702428981,
            "unit": "iter/sec",
            "range": "stddev: 0.0017840994547098745",
            "extra": "mean: 9.635640118418857 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 86.14470635012054,
            "unit": "iter/sec",
            "range": "stddev: 0.001391268008027749",
            "extra": "mean: 11.608374354840445 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 106.94503038683442,
            "unit": "iter/sec",
            "range": "stddev: 0.0016927494721300327",
            "extra": "mean: 9.350598119266195 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3587.9913280583455,
            "unit": "iter/sec",
            "range": "stddev: 0.00013321515598745923",
            "extra": "mean: 278.7074740621387 usec\nrounds: 1253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 189.8513274720602,
            "unit": "iter/sec",
            "range": "stddev: 0.0007462591632716484",
            "extra": "mean: 5.267279472392242 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.6259636244152693,
            "unit": "iter/sec",
            "range": "stddev: 0.003435165441808422",
            "extra": "mean: 615.0199088000022 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9958.197385348607,
            "unit": "iter/sec",
            "range": "stddev: 0.00006396627773540518",
            "extra": "mean: 100.41978094060373 usec\nrounds: 5163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8153.002472718902,
            "unit": "iter/sec",
            "range": "stddev: 0.00007764615901954738",
            "extra": "mean: 122.65420050418743 usec\nrounds: 3571"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.0931623702729084,
            "unit": "iter/sec",
            "range": "stddev: 0.1277176875997873",
            "extra": "mean: 10.7339475914 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.940734414907468,
            "unit": "iter/sec",
            "range": "stddev: 0.00342211311050025",
            "extra": "mean: 125.93293614286591 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.49583498798510056,
            "unit": "iter/sec",
            "range": "stddev: 0.013403775318437105",
            "extra": "mean: 2.01679999239999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 68.18096423659802,
            "unit": "iter/sec",
            "range": "stddev: 0.0018591152156559874",
            "extra": "mean: 14.666850362072504 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3666.295151921213,
            "unit": "iter/sec",
            "range": "stddev: 0.00013402877884657695",
            "extra": "mean: 272.75490885560043 usec\nrounds: 1152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 64289.983641912615,
            "unit": "iter/sec",
            "range": "stddev: 0.00001060166809090231",
            "extra": "mean: 15.55452254537625 usec\nrounds: 5123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 112.08118120674847,
            "unit": "iter/sec",
            "range": "stddev: 0.0007508362762897442",
            "extra": "mean: 8.9221043999828 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 97.91900396366728,
            "unit": "iter/sec",
            "range": "stddev: 0.0012226482125138995",
            "extra": "mean: 10.212522181813132 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 76.44454770268953,
            "unit": "iter/sec",
            "range": "stddev: 0.0017977578741757447",
            "extra": "mean: 13.081377679010288 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 212.1928523080908,
            "unit": "iter/sec",
            "range": "stddev: 0.0007268594162105044",
            "extra": "mean: 4.712694085228009 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 120433.1924309604,
            "unit": "iter/sec",
            "range": "stddev: 0.000024267698177786154",
            "extra": "mean: 8.303358732047734 usec\nrounds: 35461"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 101.77394223290653,
            "unit": "iter/sec",
            "range": "stddev: 0.0012510698390797055",
            "extra": "mean: 9.825697797099487 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 213.10512595458997,
            "unit": "iter/sec",
            "range": "stddev: 0.0007284314420795858",
            "extra": "mean: 4.692519691962208 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9160939.019519344,
            "unit": "iter/sec",
            "range": "stddev: 2.0802525624929004e-7",
            "extra": "mean: 109.15911544325836 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 138.28535302907383,
            "unit": "iter/sec",
            "range": "stddev: 0.0006296243201991141",
            "extra": "mean: 7.2314238499991745 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 103.63671852057496,
            "unit": "iter/sec",
            "range": "stddev: 0.0008827325467010523",
            "extra": "mean: 9.649089765433574 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 216.07171795705676,
            "unit": "iter/sec",
            "range": "stddev: 0.0006638011307518339",
            "extra": "mean: 4.6280929751238675 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 117.44347879863443,
            "unit": "iter/sec",
            "range": "stddev: 0.0009326690807639259",
            "extra": "mean: 8.51473415322254 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 206.5606462099467,
            "unit": "iter/sec",
            "range": "stddev: 0.0007348324731104807",
            "extra": "mean: 4.841193220240062 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3236.416941733162,
            "unit": "iter/sec",
            "range": "stddev: 0.00026963376336207556",
            "extra": "mean: 308.98367484891526 usec\nrounds: 2159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 30.046060133594064,
            "unit": "iter/sec",
            "range": "stddev: 0.0019162073008825839",
            "extra": "mean: 33.28223386206681 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 69.35686421364142,
            "unit": "iter/sec",
            "range": "stddev: 0.001118558953500287",
            "extra": "mean: 14.418183568964116 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4773011.2736863475,
            "unit": "iter/sec",
            "range": "stddev: 5.640811982262469e-7",
            "extra": "mean: 209.5113425590635 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3552.2154093847657,
            "unit": "iter/sec",
            "range": "stddev: 0.00013262177645824045",
            "extra": "mean: 281.5144592183382 usec\nrounds: 1459"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 48.951301274942516,
            "unit": "iter/sec",
            "range": "stddev: 0.0025232557456256795",
            "extra": "mean: 20.42846612765912 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.1292821893050466,
            "unit": "iter/sec",
            "range": "stddev: 0.008508556862391823",
            "extra": "mean: 885.5182606000312 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 68.90779841957146,
            "unit": "iter/sec",
            "range": "stddev: 0.0017879403637312975",
            "extra": "mean: 14.512145547171858 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 406532.49183859484,
            "unit": "iter/sec",
            "range": "stddev: 0.000002449127107219571",
            "extra": "mean: 2.4598279844185957 usec\nrounds: 1558"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 105.04655013911717,
            "unit": "iter/sec",
            "range": "stddev: 0.0013678822022198812",
            "extra": "mean: 9.51958916000251 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1294.6533224990226,
            "unit": "iter/sec",
            "range": "stddev: 0.0001735222684138701",
            "extra": "mean: 772.40754928102 usec\nrounds: 903"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.231831060334132,
            "unit": "iter/sec",
            "range": "stddev: 0.00445217819655631",
            "extra": "mean: 236.3043292000043 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.592409300823725,
            "unit": "iter/sec",
            "range": "stddev: 0.0040219017083146956",
            "extra": "mean: 86.26334474999453 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 72.04779680066589,
            "unit": "iter/sec",
            "range": "stddev: 0.0019303929939438096",
            "extra": "mean: 13.87967494365848 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6032.114201835668,
            "unit": "iter/sec",
            "range": "stddev: 0.00008875710246809204",
            "extra": "mean: 165.7793547237027 usec\nrounds: 3927"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1427618.5991485922,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012924052771486364",
            "extra": "mean: 700.4671980292098 nsec\nrounds: 105253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 85.10520624688138,
            "unit": "iter/sec",
            "range": "stddev: 0.001337888882994794",
            "extra": "mean: 11.750162464786273 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 167.9422527436266,
            "unit": "iter/sec",
            "range": "stddev: 0.017352592296891067",
            "extra": "mean: 5.954427689656854 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 105.49490350368484,
            "unit": "iter/sec",
            "range": "stddev: 0.0013959196182664342",
            "extra": "mean: 9.47913090384571 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 454060.61743989395,
            "unit": "iter/sec",
            "range": "stddev: 0.00003465943377049288",
            "extra": "mean: 2.202349117257179 usec\nrounds: 12122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.4905883816633011,
            "unit": "iter/sec",
            "range": "stddev: 0.021609685895033804",
            "extra": "mean: 2.0383686963999823 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3516.3409903037586,
            "unit": "iter/sec",
            "range": "stddev: 0.00014053555762500746",
            "extra": "mean: 284.38652643685026 usec\nrounds: 1740"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3429.6863506733444,
            "unit": "iter/sec",
            "range": "stddev: 0.00013628934251789978",
            "extra": "mean: 291.57185169532244 usec\nrounds: 2124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 107.5188153319372,
            "unit": "iter/sec",
            "range": "stddev: 0.001357872765691474",
            "extra": "mean: 9.30069771428147 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 25.77397190353184,
            "unit": "iter/sec",
            "range": "stddev: 0.003778643101574065",
            "extra": "mean: 38.79883177272218 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 219.06455012216102,
            "unit": "iter/sec",
            "range": "stddev: 0.000801716307546476",
            "extra": "mean: 4.564864554499354 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1545163.6136513301,
            "unit": "iter/sec",
            "range": "stddev: 0.000003180557772447945",
            "extra": "mean: 647.1806552815011 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 76.20260500616249,
            "unit": "iter/sec",
            "range": "stddev: 0.0021258735011058095",
            "extra": "mean: 13.122910954541911 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2257951.206982624,
            "unit": "iter/sec",
            "range": "stddev: 7.797298874387539e-7",
            "extra": "mean: 442.87936643962115 nsec\nrounds: 38023"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 210.27958359965464,
            "unit": "iter/sec",
            "range": "stddev: 0.0010139640044167558",
            "extra": "mean: 4.755573426966032 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 71.84751614272095,
            "unit": "iter/sec",
            "range": "stddev: 0.00200170363193662",
            "extra": "mean: 13.918365639997319 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5057479283274462,
            "unit": "iter/sec",
            "range": "stddev: 0.0199522130126972",
            "extra": "mean: 1.9772695921999912 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}