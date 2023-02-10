window.BENCHMARK_DATA = {
  "lastUpdate": 1676032940440,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "krzysztofwitt93@wp.pl",
            "name": "Krzysztof",
            "username": "krzysztof-kwitt"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "0ac4d3bbb41983cb411a548e629025650ef2b5f1",
          "message": "test(backends): remove test_column::test_date_extract_field",
          "timestamp": "2023-02-10T07:35:52-05:00",
          "tree_id": "2358333b8311513de9a6bedbb9a192009e40ff9a",
          "url": "https://github.com/ibis-project/ibis/commit/0ac4d3bbb41983cb411a548e629025650ef2b5f1"
        },
        "date": 1676032849617,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1286773.9285160352,
            "unit": "iter/sec",
            "range": "stddev: 0.000004656720045701975",
            "extra": "mean: 777.1372871637556 nsec\nrounds: 57143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 61.872891497540266,
            "unit": "iter/sec",
            "range": "stddev: 0.0008544879722005172",
            "extra": "mean: 16.162166916665832 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.508037292574598,
            "unit": "iter/sec",
            "range": "stddev: 0.011386269968267118",
            "extra": "mean: 1.968359438600001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 182.240503156485,
            "unit": "iter/sec",
            "range": "stddev: 0.0005266027617268199",
            "extra": "mean: 5.487254384615735 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 81.29934842295746,
            "unit": "iter/sec",
            "range": "stddev: 0.0009257058384335248",
            "extra": "mean: 12.300221581082415 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 165.64841450619517,
            "unit": "iter/sec",
            "range": "stddev: 0.0007440667545050593",
            "extra": "mean: 6.0368824113472 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.6334859790588625,
            "unit": "iter/sec",
            "range": "stddev: 0.004612582074941752",
            "extra": "mean: 612.1876849999978 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4378472.792588488,
            "unit": "iter/sec",
            "range": "stddev: 1.6346989599015217e-7",
            "extra": "mean: 228.39013678302777 nsec\nrounds: 48544"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 16.02194794463145,
            "unit": "iter/sec",
            "range": "stddev: 0.0031830284986393673",
            "extra": "mean: 62.41438328571495 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3626.9799611840954,
            "unit": "iter/sec",
            "range": "stddev: 0.00010456845902317828",
            "extra": "mean: 275.711476407918 usec\nrounds: 657"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 50.01108812911717,
            "unit": "iter/sec",
            "range": "stddev: 0.0016998972850943905",
            "extra": "mean: 19.99556573170792 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 70.66857275287224,
            "unit": "iter/sec",
            "range": "stddev: 0.001556013592863705",
            "extra": "mean: 14.150561714285596 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 58.9698223913648,
            "unit": "iter/sec",
            "range": "stddev: 0.0017837043896293777",
            "extra": "mean: 16.95782621428472 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 84305.80903223263,
            "unit": "iter/sec",
            "range": "stddev: 0.000027153046115825526",
            "extra": "mean: 11.861578834000277 usec\nrounds: 27856"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12295.593904135423,
            "unit": "iter/sec",
            "range": "stddev: 0.00004875039960762022",
            "extra": "mean: 81.32994695471085 usec\nrounds: 4581"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 178.15263359495444,
            "unit": "iter/sec",
            "range": "stddev: 0.0006325046331609056",
            "extra": "mean: 5.613164284023931 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3883.9162128506628,
            "unit": "iter/sec",
            "range": "stddev: 0.00009644236017741497",
            "extra": "mean: 257.47208363849694 usec\nrounds: 1638"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 63.91989538866075,
            "unit": "iter/sec",
            "range": "stddev: 0.0018292259064402673",
            "extra": "mean: 15.644581298507536 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 23.61700763965902,
            "unit": "iter/sec",
            "range": "stddev: 0.030531781187495916",
            "extra": "mean: 42.34236679166514 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 169.1021552054042,
            "unit": "iter/sec",
            "range": "stddev: 0.0008273380528211762",
            "extra": "mean: 5.913585186334999 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2923.7873863625987,
            "unit": "iter/sec",
            "range": "stddev: 0.000278926097166546",
            "extra": "mean: 342.0221335738341 usec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 102.4659928342539,
            "unit": "iter/sec",
            "range": "stddev: 0.0007995551058442801",
            "extra": "mean: 9.759335486238559 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.3970004401484338,
            "unit": "iter/sec",
            "range": "stddev: 0.07080451387273257",
            "extra": "mean: 2.518888894999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 172.20063611594253,
            "unit": "iter/sec",
            "range": "stddev: 0.0006764233368533695",
            "extra": "mean: 5.807179477122843 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0273322125536155,
            "unit": "iter/sec",
            "range": "stddev: 0.006614319201877533",
            "extra": "mean: 973.3949619999976 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 36.919840055350925,
            "unit": "iter/sec",
            "range": "stddev: 0.0031023402408438274",
            "extra": "mean: 27.085707806447182 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 90.62717974226325,
            "unit": "iter/sec",
            "range": "stddev: 0.000894913276224548",
            "extra": "mean: 11.034217360000866 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1176473.6391509206,
            "unit": "iter/sec",
            "range": "stddev: 0.000006635600456938812",
            "extra": "mean: 849.9977957191761 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 105.53667505048172,
            "unit": "iter/sec",
            "range": "stddev: 0.0008221763851029762",
            "extra": "mean: 9.475379052084657 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 67.6935938828341,
            "unit": "iter/sec",
            "range": "stddev: 0.0013677301816424317",
            "extra": "mean: 14.772446588237392 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 48057.60253791532,
            "unit": "iter/sec",
            "range": "stddev: 0.000018152452898675548",
            "extra": "mean: 20.808362198489704 usec\nrounds: 6132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 217.3203727526271,
            "unit": "iter/sec",
            "range": "stddev: 0.00048206426394873655",
            "extra": "mean: 4.601501402440014 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.613548487319065,
            "unit": "iter/sec",
            "range": "stddev: 0.0015020526425165276",
            "extra": "mean: 17.981229883721927 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 26.9573576097701,
            "unit": "iter/sec",
            "range": "stddev: 0.0018524241662991275",
            "extra": "mean: 37.095623928569765 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 68.98196444466427,
            "unit": "iter/sec",
            "range": "stddev: 0.001759667583070423",
            "extra": "mean: 14.49654279999777 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.60181553776733,
            "unit": "iter/sec",
            "range": "stddev: 0.0051223523805187235",
            "extra": "mean: 277.6377605999983 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 114.72350763753998,
            "unit": "iter/sec",
            "range": "stddev: 0.0014638870413914197",
            "extra": "mean: 8.716609355768849 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 167.0932295309101,
            "unit": "iter/sec",
            "range": "stddev: 0.0007926008700595519",
            "extra": "mean: 5.984682939023648 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3778372.0422257637,
            "unit": "iter/sec",
            "range": "stddev: 2.105698689663144e-7",
            "extra": "mean: 264.66424926514964 nsec\nrounds: 47620"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 789.3082900819213,
            "unit": "iter/sec",
            "range": "stddev: 0.0003329740820443293",
            "extra": "mean: 1.2669320879630077 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 66.16584724513984,
            "unit": "iter/sec",
            "range": "stddev: 0.001474564677128144",
            "extra": "mean: 15.11353729508019 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1138.1318261331605,
            "unit": "iter/sec",
            "range": "stddev: 0.0001952525102129163",
            "extra": "mean: 878.6328411512154 usec\nrounds: 938"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1178486.0703567672,
            "unit": "iter/sec",
            "range": "stddev: 0.00000973127363224326",
            "extra": "mean: 848.5463045797957 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 103.24679008797308,
            "unit": "iter/sec",
            "range": "stddev: 0.001295968671335893",
            "extra": "mean: 9.68553113513683 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 526148.4140787539,
            "unit": "iter/sec",
            "range": "stddev: 0.000007907544928066843",
            "extra": "mean: 1.9006044173884367 usec\nrounds: 21098"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 165.6137460472935,
            "unit": "iter/sec",
            "range": "stddev: 0.0007824651413410424",
            "extra": "mean: 6.038146131387156 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8703697.343453411,
            "unit": "iter/sec",
            "range": "stddev: 2.0184596829380215e-7",
            "extra": "mean: 114.89370098016799 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 114.23876009387027,
            "unit": "iter/sec",
            "range": "stddev: 0.0007182673591280196",
            "extra": "mean: 8.753596407894287 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 118.66034154378796,
            "unit": "iter/sec",
            "range": "stddev: 0.0006735670445794504",
            "extra": "mean: 8.427415486841326 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 172.59275492117794,
            "unit": "iter/sec",
            "range": "stddev: 0.0006212756621124869",
            "extra": "mean: 5.793985966888899 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 91.08002357171293,
            "unit": "iter/sec",
            "range": "stddev: 0.020150975554918866",
            "extra": "mean: 10.979355963963252 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5083657728472168,
            "unit": "iter/sec",
            "range": "stddev: 0.01764073271828891",
            "extra": "mean: 1.9670875842000044 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.94461396382475,
            "unit": "iter/sec",
            "range": "stddev: 0.0012487695177681773",
            "extra": "mean: 8.33718136190425 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6975.941759800858,
            "unit": "iter/sec",
            "range": "stddev: 0.000048222317319375115",
            "extra": "mean: 143.34982063103504 usec\nrounds: 2821"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3641.2214728488825,
            "unit": "iter/sec",
            "range": "stddev: 0.00016552016532025762",
            "extra": "mean: 274.63311623766805 usec\nrounds: 2254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1426900.3851733906,
            "unit": "iter/sec",
            "range": "stddev: 0.000007705347704358835",
            "extra": "mean: 700.8197701751159 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3700.369946771713,
            "unit": "iter/sec",
            "range": "stddev: 0.00010804952042466248",
            "extra": "mean: 270.2432498330128 usec\nrounds: 1497"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 384.39109424958895,
            "unit": "iter/sec",
            "range": "stddev: 0.0006593469830793777",
            "extra": "mean: 2.6015170875699063 msec\nrounds: 354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 26.74280901191449,
            "unit": "iter/sec",
            "range": "stddev: 0.003216475949117192",
            "extra": "mean: 37.3932296923064 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 106.0893618822789,
            "unit": "iter/sec",
            "range": "stddev: 0.001311192313525969",
            "extra": "mean: 9.426015787611588 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4090112.5054740086,
            "unit": "iter/sec",
            "range": "stddev: 2.24990810871135e-7",
            "extra": "mean: 244.49205215300503 nsec\nrounds: 34130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 6.3244195407314265,
            "unit": "iter/sec",
            "range": "stddev: 0.007068043069147539",
            "extra": "mean: 158.11727757142893 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.07799549583998262,
            "unit": "iter/sec",
            "range": "stddev: 0.1814075194667302",
            "extra": "mean: 12.821253192 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 214.33976253319491,
            "unit": "iter/sec",
            "range": "stddev: 0.0005313003995312503",
            "extra": "mean: 4.665489912750694 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 65.97248267955197,
            "unit": "iter/sec",
            "range": "stddev: 0.001646001602176787",
            "extra": "mean: 15.157834893940528 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3350.620482029943,
            "unit": "iter/sec",
            "range": "stddev: 0.00011333547678759955",
            "extra": "mean: 298.45218381586415 usec\nrounds: 2867"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 297.62579237840487,
            "unit": "iter/sec",
            "range": "stddev: 0.0007630670501985749",
            "extra": "mean: 3.3599238560903633 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3187.8323139652575,
            "unit": "iter/sec",
            "range": "stddev: 0.00020731375841423477",
            "extra": "mean: 313.69278604122286 usec\nrounds: 1748"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 67.46071288054077,
            "unit": "iter/sec",
            "range": "stddev: 0.0016517712887655295",
            "extra": "mean: 14.823442523810815 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 48.20999212790987,
            "unit": "iter/sec",
            "range": "stddev: 0.0010669884586915984",
            "extra": "mean: 20.74258791303716 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 471.52687818600504,
            "unit": "iter/sec",
            "range": "stddev: 0.0005817093823461261",
            "extra": "mean: 2.120769878160638 msec\nrounds: 435"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 2797.3834181604343,
            "unit": "iter/sec",
            "range": "stddev: 0.00011415469229866885",
            "extra": "mean: 357.4769170032481 usec\nrounds: 1482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 25.702712673183857,
            "unit": "iter/sec",
            "range": "stddev: 0.0022802254442729404",
            "extra": "mean: 38.90639920833413 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7982.92772330533,
            "unit": "iter/sec",
            "range": "stddev: 0.00006368731915918862",
            "extra": "mean: 125.26732480373131 usec\nrounds: 4963"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 113.30052998677206,
            "unit": "iter/sec",
            "range": "stddev: 0.001277292114282869",
            "extra": "mean: 8.826084044944457 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 9.62515013537816,
            "unit": "iter/sec",
            "range": "stddev: 0.005012426715252655",
            "extra": "mean: 103.89448329999595 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7815.28114022255,
            "unit": "iter/sec",
            "range": "stddev: 0.00003416233698384339",
            "extra": "mean: 127.95445001374878 usec\nrounds: 3451"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 113.45030555452836,
            "unit": "iter/sec",
            "range": "stddev: 0.0013791766007069197",
            "extra": "mean: 8.81443196747816 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 141401.3973558383,
            "unit": "iter/sec",
            "range": "stddev: 0.00014097025849290834",
            "extra": "mean: 7.072065896799366 usec\nrounds: 1472"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 144.21028999334,
            "unit": "iter/sec",
            "range": "stddev: 0.0011145835093691737",
            "extra": "mean: 6.9343179328339355 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 58.864160893479685,
            "unit": "iter/sec",
            "range": "stddev: 0.0015418435835377158",
            "extra": "mean: 16.98826560714244 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5060856181703115,
            "unit": "iter/sec",
            "range": "stddev: 0.0370630601413888",
            "extra": "mean: 1.975950242600004 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}