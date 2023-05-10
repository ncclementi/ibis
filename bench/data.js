window.BENCHMARK_DATA = {
  "lastUpdate": 1683720277039,
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "e081252f515fe52c1480656fa7687f8075a58f71",
          "message": "fix(mysql): fix binary literals",
          "timestamp": "2023-05-10T13:59:28+02:00",
          "tree_id": "9134224d24da6a0683c866ee79b6c6eec46f4eb1",
          "url": "https://github.com/ibis-project/ibis/commit/e081252f515fe52c1480656fa7687f8075a58f71"
        },
        "date": 1683720194555,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 950.3948654878993,
            "unit": "iter/sec",
            "range": "stddev: 0.006846567154643312",
            "extra": "mean: 1.0521942366414567 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.56238531470845,
            "unit": "iter/sec",
            "range": "stddev: 0.0006384925354218044",
            "extra": "mean: 9.29693030769239 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 85.58530764261967,
            "unit": "iter/sec",
            "range": "stddev: 0.000519840699221384",
            "extra": "mean: 11.684248471428305 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 148.26878365139135,
            "unit": "iter/sec",
            "range": "stddev: 0.011496733241509266",
            "extra": "mean: 6.744508016948423 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.259207024009683,
            "unit": "iter/sec",
            "range": "stddev: 0.00012506016862212543",
            "extra": "mean: 51.923217750000816 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.3099458184039,
            "unit": "iter/sec",
            "range": "stddev: 0.0006559742020868175",
            "extra": "mean: 9.774220795453848 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 245.403845940247,
            "unit": "iter/sec",
            "range": "stddev: 0.006870317351601449",
            "extra": "mean: 4.074915762499861 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 102.0166936160346,
            "unit": "iter/sec",
            "range": "stddev: 0.0008100918936711662",
            "extra": "mean: 9.802317292930026 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 272.33152615644275,
            "unit": "iter/sec",
            "range": "stddev: 0.0003165044403936427",
            "extra": "mean: 3.671994991228239 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.77280200576757,
            "unit": "iter/sec",
            "range": "stddev: 0.0000880198172918271",
            "extra": "mean: 9.454226238097315 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148421.0639093737,
            "unit": "iter/sec",
            "range": "stddev: 3.422999046543119e-7",
            "extra": "mean: 6.737588140525677 usec\nrounds: 36629"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12511.887147908472,
            "unit": "iter/sec",
            "range": "stddev: 0.000012899644107587956",
            "extra": "mean: 79.92399453244455 usec\nrounds: 3658"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16762618897184153,
            "unit": "iter/sec",
            "range": "stddev: 0.08419003354512175",
            "extra": "mean: 5.965654926200008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1888104.6759593117,
            "unit": "iter/sec",
            "range": "stddev: 9.463503408424765e-8",
            "extra": "mean: 529.6316527005677 nsec\nrounds: 93458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.49204707592096,
            "unit": "iter/sec",
            "range": "stddev: 0.0000790768795540825",
            "extra": "mean: 8.889517312500317 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1864019.8681473897,
            "unit": "iter/sec",
            "range": "stddev: 1.18364021935789e-7",
            "extra": "mean: 536.474968474386 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 101.09865083346827,
            "unit": "iter/sec",
            "range": "stddev: 0.0008371733750223299",
            "extra": "mean: 9.891328833331515 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 179.7615958573342,
            "unit": "iter/sec",
            "range": "stddev: 0.00006350251257865894",
            "extra": "mean: 5.5629234666654765 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.03648912853846,
            "unit": "iter/sec",
            "range": "stddev: 0.01414841732623807",
            "extra": "mean: 10.984606387753548 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2253.1215400066535,
            "unit": "iter/sec",
            "range": "stddev: 0.00009528546127148692",
            "extra": "mean: 443.82869820553356 usec\nrounds: 1839"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10950475.11726152,
            "unit": "iter/sec",
            "range": "stddev: 4.247827525560946e-9",
            "extra": "mean: 91.32023855520548 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 362.6941444590438,
            "unit": "iter/sec",
            "range": "stddev: 0.018885919332262642",
            "extra": "mean: 2.7571440434790975 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 230.43722033246394,
            "unit": "iter/sec",
            "range": "stddev: 0.0035264868062960483",
            "extra": "mean: 4.3395767339896185 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 423.512497437881,
            "unit": "iter/sec",
            "range": "stddev: 0.000042833894110805415",
            "extra": "mean: 2.361205409638887 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1141.5903731091062,
            "unit": "iter/sec",
            "range": "stddev: 0.00009477305259424609",
            "extra": "mean: 875.9709468086294 usec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.27000711860218,
            "unit": "iter/sec",
            "range": "stddev: 0.001083417456561864",
            "extra": "mean: 24.8323770357136 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 233.9242662258706,
            "unit": "iter/sec",
            "range": "stddev: 0.0002919489522564561",
            "extra": "mean: 4.274887834998822 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.15093647315541,
            "unit": "iter/sec",
            "range": "stddev: 0.0019115866386512053",
            "extra": "mean: 34.304215266665025 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 282.42169021987235,
            "unit": "iter/sec",
            "range": "stddev: 0.0002706888777999105",
            "extra": "mean: 3.5408045296431556 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4503342.891253579,
            "unit": "iter/sec",
            "range": "stddev: 1.720686698362822e-8",
            "extra": "mean: 222.05726371480316 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6136493.371176089,
            "unit": "iter/sec",
            "range": "stddev: 3.8240350578537905e-8",
            "extra": "mean: 162.9595176774687 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.53366137962294,
            "unit": "iter/sec",
            "range": "stddev: 0.0007870249260783153",
            "extra": "mean: 10.359080819150277 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1805.3177705764517,
            "unit": "iter/sec",
            "range": "stddev: 0.000007348590230166552",
            "extra": "mean: 553.9191029403607 usec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.82497472301796,
            "unit": "iter/sec",
            "range": "stddev: 0.0007777890902486318",
            "extra": "mean: 9.82077336842143 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 684.3486359942096,
            "unit": "iter/sec",
            "range": "stddev: 0.00008132632995688235",
            "extra": "mean: 1.461243505727483 msec\nrounds: 611"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6349622568243407,
            "unit": "iter/sec",
            "range": "stddev: 0.0021722911304684375",
            "extra": "mean: 611.6349144000083 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 759.4544152807715,
            "unit": "iter/sec",
            "range": "stddev: 0.000017517809888951088",
            "extra": "mean: 1.3167347241378515 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 45.96926627331975,
            "unit": "iter/sec",
            "range": "stddev: 0.00045040944912227136",
            "extra": "mean: 21.75366459090937 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 546.1256245330162,
            "unit": "iter/sec",
            "range": "stddev: 0.000026632401383648244",
            "extra": "mean: 1.831080533631955 msec\nrounds: 446"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.30804028069945,
            "unit": "iter/sec",
            "range": "stddev: 0.00033943820831910774",
            "extra": "mean: 19.117519880953722 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2161.9642437124803,
            "unit": "iter/sec",
            "range": "stddev: 0.00014170199067087722",
            "extra": "mean: 462.5423398690539 usec\nrounds: 1071"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14038.787558924825,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033380710859825217",
            "extra": "mean: 71.23122248290407 usec\nrounds: 5960"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 103.43684894369665,
            "unit": "iter/sec",
            "range": "stddev: 0.00022721059851031232",
            "extra": "mean: 9.667734566666141 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10604.058732579897,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024352626939558537",
            "extra": "mean: 94.30351389205356 usec\nrounds: 4571"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.4280280440477,
            "unit": "iter/sec",
            "range": "stddev: 0.0004698375024734949",
            "extra": "mean: 18.372886836736335 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8856535948897118,
            "unit": "iter/sec",
            "range": "stddev: 0.024801751260024686",
            "extra": "mean: 1.129109626799999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8634.914859290688,
            "unit": "iter/sec",
            "range": "stddev: 0.000014075933970895714",
            "extra": "mean: 115.80890099038507 usec\nrounds: 3535"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2186.2593126087604,
            "unit": "iter/sec",
            "range": "stddev: 0.00008789200944131063",
            "extra": "mean: 457.4022826261845 usec\nrounds: 1295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1023681.5344731013,
            "unit": "iter/sec",
            "range": "stddev: 1.2313699951024264e-7",
            "extra": "mean: 976.8663068780562 nsec\nrounds: 57804"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7242650.25600295,
            "unit": "iter/sec",
            "range": "stddev: 7.625336328888368e-9",
            "extra": "mean: 138.07100504005257 nsec\nrounds: 69440"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 103.26573589601392,
            "unit": "iter/sec",
            "range": "stddev: 0.0009080907388329092",
            "extra": "mean: 9.683754164178675 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.7014604104214,
            "unit": "iter/sec",
            "range": "stddev: 0.0009104812752836211",
            "extra": "mean: 10.449161336843142 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7683465194120087,
            "unit": "iter/sec",
            "range": "stddev: 0.00286792461045123",
            "extra": "mean: 1.3014961020000044 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.67593821871216,
            "unit": "iter/sec",
            "range": "stddev: 0.0010043022156704887",
            "extra": "mean: 10.451948720001383 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 135.89989198403555,
            "unit": "iter/sec",
            "range": "stddev: 0.02290435893429571",
            "extra": "mean: 7.3583575777784445 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9062030984958055,
            "unit": "iter/sec",
            "range": "stddev: 0.006045506083923219",
            "extra": "mean: 1.103505385999989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2256.9103393670725,
            "unit": "iter/sec",
            "range": "stddev: 0.00008616522032810536",
            "extra": "mean: 443.0836185900233 usec\nrounds: 1248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.164717365370954,
            "unit": "iter/sec",
            "range": "stddev: 0.0006350685689740042",
            "extra": "mean: 41.38264829999798 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.92438152113375,
            "unit": "iter/sec",
            "range": "stddev: 0.00005334841063314962",
            "extra": "mean: 9.09716285106178 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2105.1902464266077,
            "unit": "iter/sec",
            "range": "stddev: 0.00009380228041409405",
            "extra": "mean: 475.0164512197509 usec\nrounds: 1148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.40181381736863,
            "unit": "iter/sec",
            "range": "stddev: 0.0009049571024106292",
            "extra": "mean: 27.471158580643685 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 321.49294983828685,
            "unit": "iter/sec",
            "range": "stddev: 0.00003665784967941362",
            "extra": "mean: 3.110488116467272 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2213.3090301380007,
            "unit": "iter/sec",
            "range": "stddev: 0.00008244661414008284",
            "extra": "mean: 451.81218997586143 usec\nrounds: 1237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 82.86212162278613,
            "unit": "iter/sec",
            "range": "stddev: 0.020463689216635144",
            "extra": "mean: 12.068240354166981 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 258.92333613800884,
            "unit": "iter/sec",
            "range": "stddev: 0.00018467992294480493",
            "extra": "mean: 3.8621470544740295 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4516.517124018944,
            "unit": "iter/sec",
            "range": "stddev: 0.00003220328512363425",
            "extra": "mean: 221.4095446869838 usec\nrounds: 1421"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1768582.0146879877,
            "unit": "iter/sec",
            "range": "stddev: 1.030973910284084e-7",
            "extra": "mean: 565.4247253986802 nsec\nrounds: 113624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.53894783701447,
            "unit": "iter/sec",
            "range": "stddev: 0.0002456890632952547",
            "extra": "mean: 117.11044722222317 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 161.96170225379632,
            "unit": "iter/sec",
            "range": "stddev: 0.00008380669924175359",
            "extra": "mean: 6.1742991465537065 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 278.2741306378505,
            "unit": "iter/sec",
            "range": "stddev: 0.00028304994079343025",
            "extra": "mean: 3.593578740890625 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 102.5170708863455,
            "unit": "iter/sec",
            "range": "stddev: 0.0008144260797950206",
            "extra": "mean: 9.754473000000555 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 278.9419730959577,
            "unit": "iter/sec",
            "range": "stddev: 0.00033011175694405633",
            "extra": "mean: 3.584975000001144 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 166.6919687252316,
            "unit": "iter/sec",
            "range": "stddev: 0.00005137982808043389",
            "extra": "mean: 5.999089264152613 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.730251363901935,
            "unit": "iter/sec",
            "range": "stddev: 0.03257937208047742",
            "extra": "mean: 27.987488523808544 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 99.37117346128123,
            "unit": "iter/sec",
            "range": "stddev: 0.0009573623934030162",
            "extra": "mean: 10.063280578946145 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 80.73556835630737,
            "unit": "iter/sec",
            "range": "stddev: 0.02508592465359961",
            "extra": "mean: 12.386114575755956 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 267.5868700030933,
            "unit": "iter/sec",
            "range": "stddev: 0.00034600199177483925",
            "extra": "mean: 3.737104141127851 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2146.4811003506115,
            "unit": "iter/sec",
            "range": "stddev: 0.0000924214829769969",
            "extra": "mean: 465.87878171238384 usec\nrounds: 1892"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.80252182660337,
            "unit": "iter/sec",
            "range": "stddev: 0.000800978773655209",
            "extra": "mean: 9.451570555556989 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 90.07667531979757,
            "unit": "iter/sec",
            "range": "stddev: 0.0002790919538719798",
            "extra": "mean: 11.101653079997883 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 97.25778098487103,
            "unit": "iter/sec",
            "range": "stddev: 0.0008933773643182107",
            "extra": "mean: 10.281953689191772 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.00477799884524,
            "unit": "iter/sec",
            "range": "stddev: 0.001097612573026765",
            "extra": "mean: 10.100522623379486 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1961844.4746279502,
            "unit": "iter/sec",
            "range": "stddev: 8.650755805029e-8",
            "extra": "mean: 509.72440116061836 nsec\nrounds: 78734"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 162.0720652685205,
            "unit": "iter/sec",
            "range": "stddev: 0.00396256010167773",
            "extra": "mean: 6.170094755954414 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 276.5373129096849,
            "unit": "iter/sec",
            "range": "stddev: 0.00033971570967925155",
            "extra": "mean: 3.6161485387926398 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.99960380217971,
            "unit": "iter/sec",
            "range": "stddev: 0.00098497292314653",
            "extra": "mean: 17.241497086958006 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.97394207635801,
            "unit": "iter/sec",
            "range": "stddev: 0.0009332698662693174",
            "extra": "mean: 9.90354520618582 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.3821505947610233,
            "unit": "iter/sec",
            "range": "stddev: 0.003632636141186928",
            "extra": "mean: 419.7887414000036 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6251324.838100363,
            "unit": "iter/sec",
            "range": "stddev: 1.1925890338389624e-8",
            "extra": "mean: 159.96609133237467 nsec\nrounds: 62497"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5454184.405086468,
            "unit": "iter/sec",
            "range": "stddev: 1.282504225495308e-8",
            "extra": "mean: 183.34546941018473 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 125.92999285917296,
            "unit": "iter/sec",
            "range": "stddev: 0.0005112109981022528",
            "extra": "mean: 7.940920008772622 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3457640289878228,
            "unit": "iter/sec",
            "range": "stddev: 0.0015597587483994842",
            "extra": "mean: 743.0723206000096 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}