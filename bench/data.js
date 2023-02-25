window.BENCHMARK_DATA = {
  "lastUpdate": 1677283964577,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "nicholas.b.crews@gmail.com",
            "name": "Nick Crews",
            "username": "NickCrews"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "6ed3a9716c6a621bf0f55364d80856ae9268dbd2",
          "message": "fix(types): fix argument types of Table.order_by()",
          "timestamp": "2023-02-24T18:58:50-05:00",
          "tree_id": "c0b77b6ebd912ea9b1acc3eb9e6a28ea15fb2b25",
          "url": "https://github.com/ibis-project/ibis/commit/6ed3a9716c6a621bf0f55364d80856ae9268dbd2"
        },
        "date": 1677283868132,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 117.766241030379,
            "unit": "iter/sec",
            "range": "stddev: 0.00008140217032560105",
            "extra": "mean: 8.491397800003142 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 49238.00984506231,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017382246379340686",
            "extra": "mean: 20.309512978828938 usec\nrounds: 10363"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3805186.237572945,
            "unit": "iter/sec",
            "range": "stddev: 1.5255445756911887e-8",
            "extra": "mean: 262.7992265202998 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 223.07244234992913,
            "unit": "iter/sec",
            "range": "stddev: 0.00008958105436919313",
            "extra": "mean: 4.482848663266621 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 26.60205749930388,
            "unit": "iter/sec",
            "range": "stddev: 0.01929417835716719",
            "extra": "mean: 37.591077307692004 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 69.21278566782631,
            "unit": "iter/sec",
            "range": "stddev: 0.019720377191558162",
            "extra": "mean: 14.448197545455129 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.801624390842782,
            "unit": "iter/sec",
            "range": "stddev: 0.0008067547152611118",
            "extra": "mean: 128.17843437499477 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 29.94017728677595,
            "unit": "iter/sec",
            "range": "stddev: 0.000460210348130295",
            "extra": "mean: 33.39993582608752 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 24.48067929601974,
            "unit": "iter/sec",
            "range": "stddev: 0.022338808446888077",
            "extra": "mean: 40.84853969565248 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 59.143844471606386,
            "unit": "iter/sec",
            "range": "stddev: 0.00010324536611173645",
            "extra": "mean: 16.907930300000658 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 112.44784585853883,
            "unit": "iter/sec",
            "range": "stddev: 0.00013524414098412522",
            "extra": "mean: 8.893011621209851 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 73.68635952376515,
            "unit": "iter/sec",
            "range": "stddev: 0.00028591751491604286",
            "extra": "mean: 13.571032772727529 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 64.78677782253726,
            "unit": "iter/sec",
            "range": "stddev: 0.000526091185042268",
            "extra": "mean: 15.435248265304711 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 94.75973670373513,
            "unit": "iter/sec",
            "range": "stddev: 0.0007350288787927996",
            "extra": "mean: 10.553005261364167 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 72.64039986717019,
            "unit": "iter/sec",
            "range": "stddev: 0.0008952750819399111",
            "extra": "mean: 13.766444042551997 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 97.49842667416313,
            "unit": "iter/sec",
            "range": "stddev: 0.00022101420175075432",
            "extra": "mean: 10.256575763442529 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5010050136525613,
            "unit": "iter/sec",
            "range": "stddev: 0.0014516410448878225",
            "extra": "mean: 1.9959880096000062 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 323457.91537998157,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010740140213625252",
            "extra": "mean: 3.0915922982600437 usec\nrounds: 1636"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 205.39595125869144,
            "unit": "iter/sec",
            "range": "stddev: 0.00029980939644223175",
            "extra": "mean: 4.868645140626571 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 147.40924847212136,
            "unit": "iter/sec",
            "range": "stddev: 0.00004169692076028344",
            "extra": "mean: 6.783834870368558 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8062.432731862472,
            "unit": "iter/sec",
            "range": "stddev: 0.000017411571347410396",
            "extra": "mean: 124.03204259280609 usec\nrounds: 3240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3502.298256500886,
            "unit": "iter/sec",
            "range": "stddev: 0.000029400248129651933",
            "extra": "mean: 285.52679605279843 usec\nrounds: 1672"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 363.5020002900811,
            "unit": "iter/sec",
            "range": "stddev: 0.00005752212164629697",
            "extra": "mean: 2.75101649840161 msec\nrounds: 313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 94.291621998426,
            "unit": "iter/sec",
            "range": "stddev: 0.0008220535758466585",
            "extra": "mean: 10.605396097828212 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9392.432494146417,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026964481107257056",
            "extra": "mean: 106.46869174979146 usec\nrounds: 4824"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 72.15774689121947,
            "unit": "iter/sec",
            "range": "stddev: 0.0008813326159900547",
            "extra": "mean: 13.85852584210449 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 132.73414588094002,
            "unit": "iter/sec",
            "range": "stddev: 0.00009073445956348573",
            "extra": "mean: 7.533856441860716 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2903.5790139895535,
            "unit": "iter/sec",
            "range": "stddev: 0.00010909199540944795",
            "extra": "mean: 344.4025443020363 usec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3516.2756171813753,
            "unit": "iter/sec",
            "range": "stddev: 0.0000652645854135334",
            "extra": "mean: 284.3918136319456 usec\nrounds: 2098"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.562602060328986,
            "unit": "iter/sec",
            "range": "stddev: 0.0002361485736439843",
            "extra": "mean: 86.48572309091017 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 232.23791663486034,
            "unit": "iter/sec",
            "range": "stddev: 0.00003310329925300667",
            "extra": "mean: 4.3059290855259675 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.3136626824944169,
            "unit": "iter/sec",
            "range": "stddev: 0.00223404631357229",
            "extra": "mean: 761.2304233999964 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 70.61652344260476,
            "unit": "iter/sec",
            "range": "stddev: 0.0005015814494782038",
            "extra": "mean: 14.160991666670952 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3135.740520167077,
            "unit": "iter/sec",
            "range": "stddev: 0.00007438657792409929",
            "extra": "mean: 318.90393786368475 usec\nrounds: 1545"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3425.1529151314003,
            "unit": "iter/sec",
            "range": "stddev: 0.00006635716602013872",
            "extra": "mean: 291.9577679531533 usec\nrounds: 2047"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 75.95752975555367,
            "unit": "iter/sec",
            "range": "stddev: 0.00013794755291038688",
            "extra": "mean: 13.165251729725776 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6591933820654859,
            "unit": "iter/sec",
            "range": "stddev: 0.03109492722766916",
            "extra": "mean: 1.517005520999993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.554254606656148,
            "unit": "iter/sec",
            "range": "stddev: 0.0008177499158002242",
            "extra": "mean: 51.13976574998702 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3412.770788624656,
            "unit": "iter/sec",
            "range": "stddev: 0.00006112886509168525",
            "extra": "mean: 293.0170415584808 usec\nrounds: 1540"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.844954858471078,
            "unit": "iter/sec",
            "range": "stddev: 0.0010160191786293999",
            "extra": "mean: 542.0186815999955 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1203601.2843825894,
            "unit": "iter/sec",
            "range": "stddev: 2.0678645143857265e-7",
            "extra": "mean: 830.8399242968317 nsec\nrounds: 120468"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4399863.349092717,
            "unit": "iter/sec",
            "range": "stddev: 1.453806259064942e-8",
            "extra": "mean: 227.2797859066212 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 831.3232182009913,
            "unit": "iter/sec",
            "range": "stddev: 0.000016837418694826268",
            "extra": "mean: 1.202901564765664 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 94.65158129917815,
            "unit": "iter/sec",
            "range": "stddev: 0.0008381903768369464",
            "extra": "mean: 10.565063850747128 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6574433548334038,
            "unit": "iter/sec",
            "range": "stddev: 0.016932735287434865",
            "extra": "mean: 1.5210435889999985 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3007.562268423573,
            "unit": "iter/sec",
            "range": "stddev: 0.00006397030045399708",
            "extra": "mean: 332.495194031063 usec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 42.51980849876369,
            "unit": "iter/sec",
            "range": "stddev: 0.0010553367977445378",
            "extra": "mean: 23.51845023076894 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 88.24594980081436,
            "unit": "iter/sec",
            "range": "stddev: 0.0007533407563685815",
            "extra": "mean: 11.33196483529459 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 115557.43611841589,
            "unit": "iter/sec",
            "range": "stddev: 6.48250967901954e-7",
            "extra": "mean: 8.65370532256586 usec\nrounds: 32466"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 233.03648757147567,
            "unit": "iter/sec",
            "range": "stddev: 0.00008153405895181646",
            "extra": "mean: 4.291173500000876 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.853819947731196,
            "unit": "iter/sec",
            "range": "stddev: 0.00018246313003234327",
            "extra": "mean: 19.284982302326096 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 69.09653130267229,
            "unit": "iter/sec",
            "range": "stddev: 0.0008935817812842441",
            "extra": "mean: 14.472506523078174 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1229.636908694405,
            "unit": "iter/sec",
            "range": "stddev: 0.00003109706463710139",
            "extra": "mean: 813.2481978454704 usec\nrounds: 1021"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 89.56065085391366,
            "unit": "iter/sec",
            "range": "stddev: 0.0008673628987156036",
            "extra": "mean: 11.165617829543738 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 81.94457263363107,
            "unit": "iter/sec",
            "range": "stddev: 0.0003220674562282901",
            "extra": "mean: 12.203370740255561 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 207.1567820063503,
            "unit": "iter/sec",
            "range": "stddev: 0.0002898534573190475",
            "extra": "mean: 4.8272617015712544 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 495736.11142075475,
            "unit": "iter/sec",
            "range": "stddev: 3.469368814661343e-7",
            "extra": "mean: 2.017202251282543 usec\nrounds: 19011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9135434.430473395,
            "unit": "iter/sec",
            "range": "stddev: 4.450049683571826e-9",
            "extra": "mean: 109.46386924567099 nsec\nrounds: 91744"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 68.88699991807212,
            "unit": "iter/sec",
            "range": "stddev: 0.0009004315203974924",
            "extra": "mean: 14.516527083329342 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9134.892293294979,
            "unit": "iter/sec",
            "range": "stddev: 0.000044676954954938196",
            "extra": "mean: 109.47036570250545 usec\nrounds: 4047"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11348706323876298,
            "unit": "iter/sec",
            "range": "stddev: 0.09825301235186751",
            "extra": "mean: 8.8115770332 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 202.40827758815067,
            "unit": "iter/sec",
            "range": "stddev: 0.0002576346565175034",
            "extra": "mean: 4.940509409574373 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 63.14495589039568,
            "unit": "iter/sec",
            "range": "stddev: 0.0009173304994820346",
            "extra": "mean: 15.83657769491133 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 93.08447903926728,
            "unit": "iter/sec",
            "range": "stddev: 0.0008626328241324336",
            "extra": "mean: 10.742929544442681 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.208161042242745,
            "unit": "iter/sec",
            "range": "stddev: 0.0007483041448704231",
            "extra": "mean: 237.63349120000612 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5544.325052088667,
            "unit": "iter/sec",
            "range": "stddev: 0.00002008143865829882",
            "extra": "mean: 180.36460535864117 usec\nrounds: 2762"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3379.548341112911,
            "unit": "iter/sec",
            "range": "stddev: 0.00006825171647386977",
            "extra": "mean: 295.8975280320128 usec\nrounds: 1748"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 93.09250340896669,
            "unit": "iter/sec",
            "range": "stddev: 0.0008876204873227116",
            "extra": "mean: 10.742003527468569 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 209.73896293398082,
            "unit": "iter/sec",
            "range": "stddev: 0.00036362429040514486",
            "extra": "mean: 4.767831336682867 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6216760999383675,
            "unit": "iter/sec",
            "range": "stddev: 0.0031128014389263207",
            "extra": "mean: 1.6085546799999861 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 29.36834217235366,
            "unit": "iter/sec",
            "range": "stddev: 0.00043268360133678793",
            "extra": "mean: 34.05027066666928 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 208.41419670565548,
            "unit": "iter/sec",
            "range": "stddev: 0.00031656943540508487",
            "extra": "mean: 4.798137630769489 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 530.2525415525217,
            "unit": "iter/sec",
            "range": "stddev: 0.000017916897703441296",
            "extra": "mean: 1.8858938366841371 msec\nrounds: 398"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 186.6418105510046,
            "unit": "iter/sec",
            "range": "stddev: 0.0001477465334451151",
            "extra": "mean: 5.35785629729907 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1413490.3365926652,
            "unit": "iter/sec",
            "range": "stddev: 1.280119792369247e-7",
            "extra": "mean: 707.4685790994386 nsec\nrounds: 109879"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3464641.825723606,
            "unit": "iter/sec",
            "range": "stddev: 2.0404842853279718e-8",
            "extra": "mean: 288.63012406524047 nsec\nrounds: 178540"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1225078.796027322,
            "unit": "iter/sec",
            "range": "stddev: 1.5115780267312314e-7",
            "extra": "mean: 816.2740251833546 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1206074.1000635065,
            "unit": "iter/sec",
            "range": "stddev: 1.7058207796449717e-7",
            "extra": "mean: 829.1364518542804 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 457.4803480090814,
            "unit": "iter/sec",
            "range": "stddev: 0.00041398004836961077",
            "extra": "mean: 2.185886244845099 msec\nrounds: 388"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 208.77935526108803,
            "unit": "iter/sec",
            "range": "stddev: 0.00026538716861215046",
            "extra": "mean: 4.789745608465237 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 40.90176062568401,
            "unit": "iter/sec",
            "range": "stddev: 0.00041496931366573906",
            "extra": "mean: 24.448825300005694 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 71.2028705351772,
            "unit": "iter/sec",
            "range": "stddev: 0.0008872163085150114",
            "extra": "mean: 14.044377600000805 msec\nrounds: 70"
          }
        ]
      }
    ]
  }
}